import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Modal, Space, Table, Skeleton, Radio, Col, notification } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
// @ts-ignore
import Highlighter from 'react-highlight-words';
import { connect, ConnectedProps } from 'react-redux';
import { Formik, Form } from "formik"
import { $Input, $TextArea, $Radio } from "../../CustomComponents/index.js";
import { IsTokenExpiredOrMissingChecker, JWTDecoder } from "../../../GlobalFunctions/Functions.tsx"
import { useNavigate } from 'react-router-dom';
import { RegisteredUserActions } from '../../../actions/RegisteredUser/RegisteredUser.ts';
import { registeredUserInfoHandler } from './Functions/Functions.tsx';
import { IRegisteredUserData } from './Interfaces/Interfaces.ts';
import { successNotification, failedNotification } from './Constants/Constants.ts';

type props = propsFromRedux;
type DataIndex = keyof IRegisteredUserData;

const RegisteredUsers : React.FC<props> = (props) => {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const [ isConfirmationModalOpen,setIsConfirmationModalOpen ] = useState<boolean>(false);
    const [selectedUserId, setSelectedUserId] = useState<string>("");

    const { data, isLoading, getRegisteredUsers, deleteRegisteredUser, deleteOperation, statusAfterRegistration } = props ?? {};

    const navigate = useNavigate();
    const isMounted = useRef(false);

    //get all available raw drug items
    useEffect(() => {
        if (IsTokenExpiredOrMissingChecker()) {
            navigate('/login');
        } else {
            getRegisteredUsers({});
        }
    }, [statusAfterRegistration?.data , deleteOperation?.data])

    //delete a selected history record
    const handleDeleteHistoryRecord = (record: any) => {
        const { id } = record ?? {};
        setSelectedUserId(id);
        setIsConfirmationModalOpen(true);
    }

    const confirmDeleteProcess = () => {
        if(selectedUserId != "" || selectedUserId != undefined){
            deleteRegisteredUser({
                id : selectedUserId
            })
            setIsConfirmationModalOpen(false);
        }
    }

    const abortDeleteProcess = () => {
        setIsConfirmationModalOpen(false)
    }

    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
    
            if (!isMounted.current) {
                isMounted.current = true;
                return;
            }
            if (deleteOperation?.data.success) {
                api.open({
                    message: successNotification.MESSAGE,
                    description: successNotification.DESCRIPTION,
                    showProgress: true,
                    pauseOnHover: true
                });
                
            }else if(!deleteOperation?.data.success){
                api.open({
                    message: failedNotification.MESSAGE,
                    description: failedNotification.DESCRIPTION,
                    showProgress: true,
                    pauseOnHover: true
                });
            }
    
        }, [deleteOperation?.data])



    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<IRegisteredUserData> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        filterDropdownProps: {
            onOpenChange(open: any) {
                if (open) {
                    setTimeout(() => searchInput.current?.select(), 100);
                }
            },
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: TableColumnsType<IRegisteredUserData> = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            width: '15%',
            ...getColumnSearchProps('firstName'),
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            width: '15%',
        },
        {
            title: 'Emali',
            dataIndex: 'email',
            key: 'email',
            width: '15%',
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobileNumber',
            key: 'mobileNumber',
            width: '15%',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            width: '15%',
        },
        {
            title: 'Action',
            key: 'action',
            width: '10%',
            render: (_, record) => (
                <Space size="middle">
                    <DeleteOutlined className="delete-bin-btn" onClick={() => { handleDeleteHistoryRecord(record) }} />
                </Space>
            ),
        },
    ];

    return (
        <>
            <div>
                <div>
                    <h2>
                        Registered Users
                    </h2>
                </div>
                <hr />
                {contextHolder}
                <Skeleton active loading={isLoading || deleteOperation?.isLoading || statusAfterRegistration?.isLoading }>
                    <Table<IRegisteredUserData> columns={columns} dataSource={registeredUserInfoHandler(data)} className="history-table" />
                </Skeleton>
                <Modal title="DELETE CONFIRMATION!" open={isConfirmationModalOpen} onOk={confirmDeleteProcess} onCancel={abortDeleteProcess}>
                    <hr />
                    <p>Are you sure to delete the selected record?</p>
                    <hr />
                </Modal>

            </div >
        </>
    );

}

const mapStateToProps = (state: any) => {
    const { RegisteredUserReducer, RegisterReducer : statusAfterRegistration } = state;
    const { data, isLoading , deleteOperation } = RegisteredUserReducer;
    return {
        data,
        isLoading,
        deleteOperation,
        statusAfterRegistration
    }
}

const mapDispatchToProps = {
    getRegisteredUsers: RegisteredUserActions.registeredUser.get,
    deleteRegisteredUser : RegisteredUserActions.registeredUserRemoving.delete
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(RegisteredUsers);

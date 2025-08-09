import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, DeleteOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Modal, Space, Table, Skeleton, Tooltip } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { connect, ConnectedProps } from 'react-redux';
import { RawDrugsActions } from '../../actions/RawDrugs/index.ts';
import { Formik, Form } from "formik"
import { $Input, $TextArea, $Radio } from "../CustomComponents/index.ts";
import { IsTokenExpiredOrMissingChecker, JWTDecoder } from "../../GlobalFunctions/Functions.tsx"
import { useNavigate } from 'react-router-dom';
import { HistoryActions } from '../../actions/History/History.ts';
import { historyRecoredFormatter } from './Functions/Functions.tsx';
import { General } from './Constants/Constants.ts';


type props = propsFromRedux;

export interface DataType {
    key: string;
    itemName: string;
    initialAmount: number,
    currentAmount: number,
    adjustedAmount: number,
    measurementUnit: string,
    AdjustmentType: string,
    storeKeeper: string,
    time: string,
    Reason: string
}

type DataIndex = keyof DataType;

const History: React.FC<props> = (props) => {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false);
    const [selectedRawDrugItemId, setSelectedRawDrugItemId] = useState<string>(General.EMPTY_VALUE);

    const { data, isLoading, getAllHistoryRecords, deleteHistoryRecord, deleteHistoryRecordStatus } = props ?? {};

    const navigate = useNavigate();

    console.log("DECKO", deleteHistoryRecordStatus);

    //get all available raw drug items
    useEffect(() => {
        if (IsTokenExpiredOrMissingChecker()) {
            navigate('/login');
        } else {
            getAllHistoryRecords({});
        }
    }, [deleteHistoryRecordStatus?.data])

    //delete a selected history record
    const handleDeleteHistoryRecord = (record: any) => {
        console.log("alex", record);
        const { id } = record ?? {};
        setSelectedRawDrugItemId(id);
        setIsConfirmationModalOpen(true);
    }

    const confirmDeleteProcess = () => {
        if (selectedRawDrugItemId != "" || selectedRawDrugItemId != undefined) {
            deleteHistoryRecord({
                id: selectedRawDrugItemId
            })
            setIsConfirmationModalOpen(false);
        }
    }

    const abortDeleteProcess = () => {
        setIsConfirmationModalOpen(false)
    }



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


    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
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

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Item Name',
            dataIndex: 'itemName',
            key: 'itemName',
            width: '15%',
            ...getColumnSearchProps('itemName'),
        },
        {
            title: 'Initial Amount',
            dataIndex: 'initialAmount',
            key: 'initialAmount',
            width: '15%',
        },
        {
            title: 'Current Amount (Balance)',
            dataIndex: 'currentAmount',
            key: 'currentAmount',
            width: '15%',
        },
        {
            title: 'Adjusted Amount',
            dataIndex: 'adjustedAmount',
            key: 'adjustedAmount',
            width: '15%',
        },
        {
            title: 'Store Keeper',
            dataIndex: 'storeKeeper',
            key: 'storeKeeper',
            width: '15%',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            width: '15%',
        },
        {
            title: 'Reason',
            dataIndex: 'reason',
            key: 'reason',
            width: '15%',
            render: (text: string) => (
                <Tooltip title={text}>
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%", // keeps within cell width
                        }}
                    >
                        {text}
                    </div>
                </Tooltip>
            ),
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
                        History of Inventory Transactions
                    </h2>
                </div>
                <hr />
                <Skeleton active loading={isLoading || deleteHistoryRecordStatus?.isLoading}>
                    <Table<DataType> columns={columns} dataSource={historyRecoredFormatter(data)} className="history-table" />
                </Skeleton>
                <Modal title="DELETE CONFIRMATION!"
                    open={isConfirmationModalOpen}
                    onOk={confirmDeleteProcess}
                    onCancel={abortDeleteProcess}
                    okText="Delete"
                    okButtonProps={{
                        style: { backgroundColor: "#DC3545", borderColor: "#DC3545" }, // Green
                    }}>
                    <hr />
                    <p>Are you sure to delete the selected record?</p>
                    <hr />
                </Modal>

            </div >
        </>
    );

}

const mapStateToProps = (state: any) => {
    const { HistoryReducer } = state;
    const { data, isLoading, deleteHistoryRecordStatus } = HistoryReducer;
    return {
        deleteHistoryRecordStatus,
        isLoading,
        data
    }
}

const mapDispatchToProps = {
    getAllHistoryRecords: HistoryActions.allHistoryRecords.get,
    deleteHistoryRecord: HistoryActions.historyRecord.delete
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(History);

import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, EditOutlined, LeftCircleOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Modal, Space, Table, Skeleton, Col, Row } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
// @ts-ignore
import Highlighter from 'react-highlight-words';
import { connect, ConnectedProps } from 'react-redux';
import { RawDrugsActions } from '../../actions/RawDrugs/index.ts';
import { Formik, Form } from "formik"
import { $Input, $TextArea, $Radio } from "../CustomComponents/index.ts";
import { InventoryFormInitInfo, AdjustmentType, SelectedItemInfo, Component, Headings } from './Constants/Constants.ts';
import { StoreKeeperValidationSchema } from './Validation/StoreKeeperValidationSchema.ts';
import { BalanceAmountCalculator, TableDataHandler } from './Functions/Functions.tsx';
import { IInventoryFormInitInfo, ISelectedItemInfo } from './Interfaces/Interfaces.ts';
import { IsTokenExpiredOrMissingChecker, JWTDecoder } from "../../GlobalFunctions/Functions.tsx"
import { useNavigate, useLocation } from 'react-router-dom';
import { StoreKeeperActions } from '../../actions/StoreKeeper/StoreKeeper.ts';
import stroreKeeperOne from "../../assets/images/StoreKeeper/storekeeper01.png"
import { FinishedDrugsActions } from '../../actions/FinishedDrugs/index.ts';
import { NotificationActions } from '../../actions/Notification/index.ts';

type props = propsFromRedux;

interface DataType {
    key: string;
    itemName: string;
    amount: number,
    amountWithUnit: string,
    id: string,
    measurementUnit: string
}

type DataIndex = keyof DataType;

const StoreKeeper: React.FC<props> = (props) => {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInventoryUpdateFormOpen, setisInventoryUpdateFormOpen] = useState(false);
    const [invertoryUpdateFormInitInfo, setInvertoryUpdateFormInitInfo] = useState<IInventoryFormInitInfo>(InventoryFormInitInfo);
    const [selectedItemId, setSelectedItemId] = useState<ISelectedItemInfo>(SelectedItemInfo);

    const {
        data,
        rawDrugRetrievingLoader,
        updateRawDrugInventory,
        updateFinishedDrugInventory,
        getAllRawDrugItems,
        getAllFinishedDrugItems,
        finishedDrugsData,
        finishedDrugRetrievingLoader,
        updatingLoader,
        updateResponse,
        getNotifications
    } = props ?? {};

    const navigate = useNavigate();
    const location = useLocation();


    //get all available raw drug items
    useEffect(() => {
        if (IsTokenExpiredOrMissingChecker()) {
            navigate('/login');
        } else {
            
            if (location.state?.from == Component.COMPONENT_NAME_RAW_DRUG) {
                getAllRawDrugItems({});
            } else if (location.state?.from == Component.COMPONENT_NAME_FINISHED_DRUG) {
                getAllFinishedDrugItems({});
            } else if (location.state?.from == Component.COMPONENT_NAME_GENERAL_STORE) {

            }
        }
    }, [])

    //set the updated value
    useEffect(() => {
        
        if (updateResponse?.isSuccessful) {
            if (location.state?.from == Component.COMPONENT_NAME_RAW_DRUG) {
                getAllRawDrugItems({});
            } else if (location.state?.from == Component.COMPONENT_NAME_FINISHED_DRUG) {
                getAllFinishedDrugItems({});
            } else if (location.state?.from == Component.COMPONENT_NAME_GENERAL_STORE) {

            }

            //get the notifications
            getNotifications({});
        }
    }, [updateResponse])


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

    const submitInventoryUpdate = (values: any, actions: any) => {
        
        
        const { amount, amountAdjusted, adjustmentType, reason, itemName } = values ?? {};
        const result = BalanceAmountCalculator(amount, amountAdjusted, adjustmentType);
        const author = JWTDecoder(localStorage.getItem('token')).fullName;
        if (result != -1) {
            const updatedInventory = {
                balance: result,
                initialAmount: amount,
                itemName,
                author,
                measurementUnit: selectedItemId?.measurementUnit,
                adjustmentType,
                amountAdjusted,
                reason
            };

            //selection
            if (location.state?.from == Component.COMPONENT_NAME_RAW_DRUG) {
                updateRawDrugInventory({ ...updatedInventory, id: selectedItemId?.id });
            } else if (location.state?.from == Component.COMPONENT_NAME_FINISHED_DRUG) {
                updateFinishedDrugInventory({ ...updatedInventory, id: selectedItemId?.id });
            } else if (location.state?.from == Component.COMPONENT_NAME_GENERAL_STORE) {

            }

            //updateRawDrugInventory({ ...updatedInventory, id: selectedRawDrugItemId?.id })
            actions.resetForm();
            setisInventoryUpdateFormOpen(false);

        } else {

        }
        actions.resetForm();
        setIsModalOpen(false);
    }

    const editDataRow = (rawData: DataType) => {
        
        const { id, itemName, amount, amountWithUnit, measurementUnit } = rawData ?? {};
        setSelectedItemId({
            id,
            measurementUnit
        });
        setInvertoryUpdateFormInitInfo({
            ...invertoryUpdateFormInitInfo,
            itemName,
            amount,
            amountWithUnit
        })
        setisInventoryUpdateFormOpen(true);
    }

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
            width: '50%',
            ...getColumnSearchProps('itemName'),
        },
        {
            title: 'Current Amount (Balance)',
            dataIndex: 'amountWithUnit',
            key: 'amountWithUnit',
            width: '30%',
        },
        {
            title: 'Action',
            key: 'action',
            width: '20%',
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined className="edit-pen-btn" onClick={() => { editDataRow(record) }} />
                </Space>
            ),
        },
    ];

    const drugDataHandler = () => {
        if (location.state?.from == Component.COMPONENT_NAME_RAW_DRUG) {
            return TableDataHandler(data);
        } else if (location.state?.from == Component.COMPONENT_NAME_FINISHED_DRUG) {
            return TableDataHandler(finishedDrugsData);
        } else if (location.state?.from == Component.COMPONENT_NAME_GENERAL_STORE) {

        }
    }

    const headingHandler = () => {
        if (location.state?.from == Component.COMPONENT_NAME_RAW_DRUG) {
            return (
                <h2>
                    <LeftCircleOutlined className="left-circle-icon" onClick={() => { navigate("/rawdrugs") }} />
                    {" " + Headings.RAW_DRUG}
                </h2>
            );
        } else if (location.state?.from == Component.COMPONENT_NAME_FINISHED_DRUG) {
            return (
                <h2>
                    <LeftCircleOutlined className="left-circle-icon" onClick={() => { navigate("/finisheddrugs") }} />
                    {" " + Headings.FINISHED_DRUG}
                </h2>
            );
        } else if (location.state?.from == Component.COMPONENT_NAME_GENERAL_STORE) {
            return (
                <h2>
                    <LeftCircleOutlined className="left-circle-icon" onClick={() => { navigate("/generalstore") }} />
                    {" " + Headings.GENERAL_STORE}
                </h2>
            );
        }
    }

    return (
        <>
            <div>
                <div>
                    {headingHandler()}
                </div>
                <hr />
                <Row>
                    <Col span={12} >
                        <Skeleton active loading={rawDrugRetrievingLoader || updatingLoader || finishedDrugRetrievingLoader}>
                            <Table<DataType> columns={columns} dataSource={drugDataHandler()} />
                        </Skeleton>
                        {/** This modal is used for editing processes**/}
                        <>
                            <Modal
                                title="Inventory Update Form"
                                open={isInventoryUpdateFormOpen}
                                onCancel={() => { setisInventoryUpdateFormOpen(false) }}
                                footer={null}
                                className='inventory-update-modal'
                            >
                                <hr />
                                <label><b>{`Selected Item Name : ${invertoryUpdateFormInitInfo?.itemName}`}</b></label>
                                <br />
                                <br />
                                <label><b>{`Current Amount : ${invertoryUpdateFormInitInfo?.amountWithUnit}`}</b></label>
                                <br />
                                <br />
                                <Formik
                                    initialValues={invertoryUpdateFormInitInfo}
                                    onSubmit={submitInventoryUpdate}
                                    validationSchema={StoreKeeperValidationSchema}
                                    enableReinitialize={true}
                                >
                                    {({
                                        values,
                                        handleChange,
                                        handleBlur,
                                        errors,
                                        touched,
                                        setFieldValue
                                    }) => (

                                        <Form>
                                            <$Radio
                                                label="Adjustment Type : "
                                                options={AdjustmentType}
                                                optionType='button'
                                                defaultValue='1'
                                                name="adjustmentType"
                                                buttonStyle="solid"
                                            />
                                            <br />
                                            <br />
                                            <$Input
                                                label={`Adjustment Amount : ( ${selectedItemId?.measurementUnit} )`}
                                                type="number"
                                                name="amountAdjusted"
                                                isOnlyPositiveValues={true}
                                                placeholder="Enter inventory adjustment..."
                                            />
                                            <br />
                                            <$TextArea
                                                label="Reason : (Optional)"
                                                type="text"
                                                name="reason"
                                                placeholder="Add a comment about the inventory update..."
                                            />
                                            <hr />
                                            <Button type="primary" htmlType="submit"  >Submit</Button>
                                            <br />
                                            <br />
                                        </Form>
                                    )}
                                </Formik>
                            </Modal>
                        </>
                    </Col>
                    <Col span={12} >
                        <img src={stroreKeeperOne} alt="storeKeeper" style={{ width: "620px", height: "440px" }} />
                    </Col>
                </Row>

            </div >
        </>
    );

}

const mapStateToProps = (state: any) => {
    const { StoreKeeperReducer, RawDrugsReducer, FinishedDrugsReducer } = state;
    const { data, isLoading: rawDrugRetrievingLoader } = RawDrugsReducer;
    const { data: finishedDrugsData, isLoading: finishedDrugRetrievingLoader } = FinishedDrugsReducer;
    const { data: updateResponse, isLoading: updatingLoader } = StoreKeeperReducer;
    return {
        updateResponse,
        rawDrugRetrievingLoader,
        data,
        finishedDrugsData,
        finishedDrugRetrievingLoader,
        updatingLoader
    }
}

const mapDispatchToProps = {
    updateRawDrugInventory: StoreKeeperActions.rawDrugInventory.update,
    updateFinishedDrugInventory: StoreKeeperActions.finishedDrugInventory.update,
    updateGeneralStoreInventory: StoreKeeperActions.generalStoreInventory.update,
    getAllRawDrugItems: RawDrugsActions.allRawDrugItems.get,
    getAllFinishedDrugItems: FinishedDrugsActions.allFinishedDrugItems.get,
    getNotifications: NotificationActions.notifications.get
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(StoreKeeper);

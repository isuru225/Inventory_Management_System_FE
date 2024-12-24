import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Modal, Space, Table, Skeleton, Radio } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { connect, ConnectedProps } from 'react-redux';
import { RawDrugsActions } from '../../actions/RawDrugs/index.ts';
import { Formik, Form } from "formik"
import { $Input, $TextArea, $Radio } from "../CustomComponents/index.ts";
import { General, InventoryFormInitInfo, AdjustmentType } from './Constants.ts/Constants.ts';
import { StoreKeeperValidationSchema } from './Validation/StoreKeeperValidationSchema.ts';
import moment from "moment";
import { BalanceAmountCalculator, TableDataHandler } from './Functions/Functions.tsx';
import { IInventoryFormInitInfo } from './Interfaces/Interfaces.ts';
import { AnyObject } from 'antd/es/_util/type';
import { IsTokenExpiredOrMissingChecker, JWTDecoder } from "../../GlobalFunctions/Functions.tsx"
import { useNavigate } from 'react-router-dom';
import { StoreKeeperActions } from '../../actions/StoreKeeper/StoreKeeper.ts';

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
    const [selectedRawDrugItemId, setSelectedRawDrugItemId] = useState<string>(General.EMPTY_VALUE);

    const { data, rawDrugRetrievingLoader, updateRawDrugInventory, getAllRawDrugItems } = props ?? {};

    const navigate = useNavigate();

    // useEffect(()=>{
    //     if(EditRawDrug?.data.rawDrugId != General.EMPTY_VALUE){

    //     }

    // },[EditRawDrug])

    //get all available raw drug items
    useEffect(() => {
        if (IsTokenExpiredOrMissingChecker()) {
            navigate('/login');
        } else {
            getAllRawDrugItems({});
        }
    }, [])


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
        console.log("froggggg");
        console.log("Tiger", values);
        const { amount, amountAdjusted, adjustmentType } = values ?? {};
        const result = BalanceAmountCalculator(amount, amountAdjusted, adjustmentType);
        const author = JWTDecoder(localStorage.getItem('token')).fullName;
        if (result != -1) {
            const updatedInventory = {
                balance: result,
                author,
                adjustmentType,
                amountAdjusted
            };
            updateRawDrugInventory({ ...updatedInventory, id: selectedRawDrugItemId })
            actions.resetForm();
            setisInventoryUpdateFormOpen(false);

        } else {

        }
        actions.resetForm();
        setIsModalOpen(false);
    }

    const editDataRow = (rawData: DataType) => {
        console.log("Lions", rawData);
        const { id, itemName, amount, amountWithUnit } = rawData ?? {};
        setSelectedRawDrugItemId(id);
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

    return (
        <>
            <div>
                <div>
                    <h2>
                        Raw Drugs - Store Keeper
                    </h2>
                </div>
                <hr />
                <Skeleton active loading={rawDrugRetrievingLoader}>
                    <Table<DataType> columns={columns} dataSource={TableDataHandler(data)} />
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
                                    {/* <$Input
                                        label="Item Name : "
                                        type="text"
                                        name="itemName"
                                        placeholder=""
                                        disabled={true}
                                    />
                                    <br />
                                    <$Input
                                        label="Current Amount : "
                                        type="string"
                                        name="amount"
                                        placeholder=""
                                        disabled={true}
                                    />
                                    <br/> */}
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
                                        label="Adjustment Amount : "
                                        type="number"
                                        name="amountAdjusted"
                                        isOnlyPositiveValues={true}
                                        placeholder="Enter inventory adjustment..."
                                    />
                                    <br />
                                    <$TextArea
                                        label="Comment : (Optional)"
                                        type="text"
                                        name="comment"
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
                <>
                    {/* <Modal title="DELETE CONFIRMATION!" open={isConfirmationModalOpen} onOk={confirmDeleteProcess} onCancel={abortDeleteProcess}>
                        <hr/>
                        <p>Are you sure to delete the selected record?</p>
                        <hr/>
                    </Modal> */}
                </>

            </div >
        </>
    );

}

const mapStateToProps = (state: any) => {
    const { StoreKeeperReducer, RawDrugsReducer } = state;
    const { data, isLoading : rawDrugRetrievingLoader } = RawDrugsReducer;
    const { data : updateResponse , isLoading } = StoreKeeperReducer;
    return {
        updateResponse,
        rawDrugRetrievingLoader,
        data
    }
}

const mapDispatchToProps = {
    updateRawDrugInventory: StoreKeeperActions.rawDrugInventory.update,
    getAllRawDrugItems: RawDrugsActions.allRawDrugItems.get
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(StoreKeeper);

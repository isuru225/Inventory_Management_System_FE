import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType, message, Popconfirm } from 'antd';
import { Button, Input, Modal, Space, Table, Skeleton } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { connect, ConnectedProps } from 'react-redux';
import { FinishedDrugsActions } from '../../actions/FinishedDrugs/index.ts';
import { Formik, Form } from "formik"
import { $Input, $Select, $TextArea, $DatePicker } from "../CustomComponents/index.ts";
import { General, measurementUnitsArray, finishedDrugsItemInitInfo, finishedDrugsItemInitInfoForEditModal, Component } from './Constants/Constants.ts';
import { finishedDrugsValidationSchema, EditFinishedDrugValidationSchema } from './Validation/finishedDrugsValidationSchema.ts';
import moment from "moment";
import { extractNumber, MeasurementOptionsHandler, TableDataHandler } from './Functions/Functions.tsx';
import { IFinishedDrugInfoForEditModal, IFinishedDrugsItemInitInfo } from './Interfaces/interfaces.ts';
import { AnyObject } from 'antd/es/_util/type';
import { IsTokenExpiredOrMissingChecker } from "../../GlobalFunctions/Functions.tsx"
import { useNavigate } from 'react-router-dom';

type props = propsFromRedux;

interface DataType {
    key: string;
    itemName: string;
    expirationDate: string;
    category: string;
    amount: number,
    reorderPoint : number,
    id: string,
    measurementUnit: string
}

type DataIndex = keyof DataType;

const FinishedDrugs: React.FC<props> = (props) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editModalInitInfo, setEditModalInitInfo] = useState<IFinishedDrugInfoForEditModal>(finishedDrugsItemInitInfoForEditModal);
    const [selectedFinishedDrugItemId, setSelectedFinishedDrugItemId] = useState<string>(General.EMPTY_VALUE);
    const [ isConfirmationModalOpen,setIsConfirmationModalOpen ] = useState<boolean>(false);

    const { getAllFinishedDrugItems, addNewFinishedDrug, data, isLoading, AddFinishedDrug, editFinishedDrug, EditFinishedDrug, deleteFinishedDrug, DeleteFinishedDrug } = props ?? {};

    const navigate = useNavigate();

    useEffect(()=>{
        if(EditFinishedDrug?.data.rawDrugId != General.EMPTY_VALUE){
            
        }

    },[EditFinishedDrug])

    //get all available finished drug items
    useEffect(()=>{
        if(IsTokenExpiredOrMissingChecker()){
            navigate('/login');
        }else{
            getAllFinishedDrugItems({});
        }
    },[AddFinishedDrug?.isLoading, EditFinishedDrug?.isLoading, DeleteFinishedDrug?.isLoading])


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

    const submit = (values: any, actions: any) => {
        console.log("froggggg");
        console.log("Tiger", values);
        if (values) {
            addNewFinishedDrug(values);
        }

        actions.resetForm();
        setIsModalOpen(false);
        //addMovieRecords(values);
    }

    const submitEditInfo = (values: any, actions: AnyObject) => {
        console.log("FAV", values);
        const { itemNameEdit, categoryEdit, amountEdit, expirationDateEdit, measurementUnitEdit, reorderPointEdit } = values ?? {};
        const editData = {
            ItemName: itemNameEdit,
            ExpirationDate: expirationDateEdit,
            Category: categoryEdit,
            MeasurementUnit: measurementUnitEdit,
            Amount: amountEdit,
            ReorderPoint : reorderPointEdit
        }
        editFinishedDrug({ ...editData, id: selectedFinishedDrugItemId })
        actions.resetForm();
        setIsEditModalOpen(false);
    }

    const confirmDeleteProcess = () => {
        if(selectedFinishedDrugItemId != "" || selectedFinishedDrugItemId != undefined){
            deleteFinishedDrug(selectedFinishedDrugItemId)
            setIsConfirmationModalOpen(false);
        }
    }

    const abortDeleteProcess = () => {
        setIsConfirmationModalOpen(false)
    }

    const editDataRow = (rawData : any) => {
        console.log("Lions", rawData);
        const { id, itemName, expirationDate, category, measurementUnit, amount, reorderPoint } = rawData ?? {};
        setSelectedFinishedDrugItemId(id);
        setEditModalInitInfo({
            itemNameEdit: itemName,
            expirationDateEdit: expirationDate,
            categoryEdit: category,
            measurementUnitEdit: measurementUnit,
            amountEdit: extractNumber(amount),
            reorderPointEdit : extractNumber(reorderPoint)
        })
        setIsEditModalOpen(true);
    }

    const deleteDataRaw = (rawData: DataType) => {
        const { id } = rawData ?? {};
        setSelectedFinishedDrugItemId(id);
        setIsConfirmationModalOpen(true);
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
            width: '30%',
            ...getColumnSearchProps('itemName'),
        },
        {
            title: 'Expiration Date',
            dataIndex: 'expirationDate',
            key: 'expirationDate',
            width: '15%',
            ...getColumnSearchProps('expirationDate'),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: '15%',
            ...getColumnSearchProps('category'),
            // sorter: (a, b) => a.address.length - b.address.length,
            // sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            width: '15%',
            ...getColumnSearchProps('amount'),
        },
        {
            title: 'Reorder Point',
            dataIndex: 'reorderPoint',
            key: 'reorderPoint',
            width: '15%',
            ...getColumnSearchProps('reorderPoint'),
        },
        {
            title: 'Action',
            key: 'action',
            width: '10%',
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined className="edit-pen-btn" onClick={() => { editDataRow(record) }} />
                    <DeleteOutlined className="delete-bin-btn" onClick={()=> { deleteDataRaw(record)}}/>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div>
                <div>
                    <h2>
                        Finished Drugs
                    </h2>
                    <hr />
                </div>
                <div>
                    <Button color='3D99F5' onClick={() => { setIsModalOpen(true) }} className="rawdrug-add-btn">
                        <PlusOutlined /> ADD
                    </Button>
                    <Button color='3D99F5' onClick={() => {navigate('/finisheddrugs/storekeeper',{ state: { from: Component.COMPONENT_NAME } })}} className="store-keeper-btn">
                        <UserOutlined /> Store Keeper
                    </Button>
                </div>
                <hr />
                <Skeleton active loading={isLoading}>
                    <Table<DataType> columns={columns} dataSource={TableDataHandler(data)} />
                </Skeleton>
                <>
                    <Modal
                        title="ADD NEW RAW DRUG ITEM"
                        open={isModalOpen}
                        onCancel={() => { setIsModalOpen(false) }}
                        footer={null}
                        className='finish-drug-modal'
                    >
                        <hr />
                        <Formik
                            initialValues={finishedDrugsItemInitInfo}
                            onSubmit={submit}
                            validationSchema={finishedDrugsValidationSchema}
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
                                    <$Input
                                        label="Item Name : "
                                        type="text"
                                        name="itemName"
                                        placeholder="Enter drug item name..."
                                    />
                                    <br />
                                    <$DatePicker
                                        label="Expiration Date : "
                                        name="expirationDate"
                                        value={values.expirationDate ? moment(values.expirationDate) : null}
                                        onChange={(value, dateString) => {
                                            const isoString = value ? value.toISOString() : null
                                            setFieldValue('expirationDate', isoString);
                                        }}
                                        onOk={(value) => console.log('Expiration Time confirmed: ', value)}
                                    />
                                    <br />
                                    <$Input
                                        label="Category : "
                                        type="string"
                                        name="category"
                                        placeholder="Enter Category of the item..."
                                    />
                                    <br />
                                    <$Select label="Measurement Unit : "
                                        name="measurementUnit"
                                        placeholder="Enter Measurement Units..."
                                    >
                                        {MeasurementOptionsHandler(measurementUnitsArray)}
                                    </$Select>
                                    <br />
                                    <br />
                                    <$Input
                                        label="Amount : "
                                        type="number"
                                        name="amount"
                                        placeholder="Enter Amount of the item..."
                                    />
                                    <br />
                                    <$Input
                                        label="Reorder Point : "
                                        type="number"
                                        name="reorderPoint"
                                        placeholder="Enter Reorder Point of the item..."
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
                {/** This modal is used for editing processes**/}
                <>
                    <Modal
                        title="EDIT THE SELECTED DRUG ITEM"
                        open={isEditModalOpen}
                        onCancel={() => { setIsEditModalOpen(false) }}
                        footer={null}
                        className='finish-drug-modal'
                    >
                        <hr />
                        <Formik
                            initialValues={editModalInitInfo}
                            onSubmit={submitEditInfo}
                            validationSchema={EditFinishedDrugValidationSchema}
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
                                    <$Input
                                        label="Item Name : "
                                        type="text"
                                        name="itemNameEdit"
                                        placeholder="Enter drug item name..."
                                    />
                                    <br />
                                    <$DatePicker
                                        label="Expiration Date : "
                                        name="expirationDateEdit"
                                        value={values.expirationDateEdit ? moment(values.expirationDateEdit) : null}
                                        onChange={(value, dateString) => {
                                            const isoString = value ? value.toISOString() : null
                                            setFieldValue('expirationDateEdit', isoString);
                                        }}
                                        onOk={(value) => console.log('Expiration Time confirmed: ', value)}
                                    />
                                    <br />
                                    <$Input
                                        label="Category : "
                                        type="string"
                                        name="categoryEdit"
                                        placeholder="Enter Category of the item..."
                                    />
                                    <br />
                                    <$Select label="Measurement Unit : "
                                        name="measurementUnitEdit"
                                        placeholder="Enter Measurement Units..."
                                    >
                                        {MeasurementOptionsHandler(measurementUnitsArray)}
                                    </$Select>
                                    <br />
                                    <br />
                                    <$Input
                                        label="Amount : "
                                        type="number"
                                        name="amountEdit"
                                        placeholder="Enter Amount of the item..."
                                    />
                                    <$Input
                                        label="Reorder Point : "
                                        type="number"
                                        name="reorderPointEdit"
                                        placeholder="Enter Reorder Point of the item..."
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
                    <Modal title="DELETE CONFIRMATION!" open={isConfirmationModalOpen} onOk={confirmDeleteProcess} onCancel={abortDeleteProcess}>
                        <hr/>
                        <p>Are you sure to delete the selected record?</p>
                        <hr/>
                    </Modal>
                </>

            </div >
        </>
    );
};


const mapStateToProps = (state: any) => {
    const { FinishedDrugsReducer } = state;
    const { data, isLoading, AddFinishedDrug, EditFinishedDrug, DeleteFinishedDrug } = FinishedDrugsReducer;
    return {
        data,
        isLoading,
        AddFinishedDrug,
        EditFinishedDrug,
        DeleteFinishedDrug
    }
}

const mapDispatchToProps = {
    getAllFinishedDrugItems: FinishedDrugsActions.allFinishedDrugItems.get,
    addNewFinishedDrug: FinishedDrugsActions.addFinishedDrugItem.add,
    editFinishedDrug: FinishedDrugsActions.editFinishedDrugItem.edit,
    deleteFinishedDrug : FinishedDrugsActions.deleteFinishedDrug.delete
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(FinishedDrugs);

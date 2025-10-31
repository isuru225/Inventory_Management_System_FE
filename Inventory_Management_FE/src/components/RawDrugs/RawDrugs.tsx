import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType, CheckboxProps } from 'antd';
import { Button, Input, Modal, Space, Table, Skeleton, Result, Checkbox, ConfigProvider } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
// @ts-ignore
import Highlighter from 'react-highlight-words';
import { connect, ConnectedProps } from 'react-redux';
import { RawDrugsActions } from '../../actions/RawDrugs/index.ts';
import { Formik, Form } from "formik"
import { $Input, $Select, $DatePicker } from "../CustomComponents/index.ts";
import { Component, General, measurementUnitsArray, rawDrugsItemInitInfo, rawDrugsItemInitInfoForEditModal } from './Constants/Constants.ts';
import { RawDrugsValidationSchema, EditDrugValidationSchema } from './Validation/RawDrugsValidationSchema.ts';
import moment from "moment";
import { extractNumber, MeasurementOptionsHandler, TableDataHandler, tableRowColorHandler } from './Functions/Functions.tsx';
import { IRawDrugInfoForEditModal } from './Interfaces/Interfaces.ts';
import { AnyObject } from 'antd/es/_util/type';
import { IsTokenExpiredOrMissingChecker, getAttributesFromToken } from "../../GlobalFunctions/Functions.tsx"
import { useNavigate } from 'react-router-dom';

type props = propsFromRedux;

interface DataType {
    key: string;
    itemName: string;
    expirationDate: string;
    category: string;
    amount: string | number,
    reorderPoint: string | number,
    id: string,
    measurementUnit: string
}

type DataIndex = keyof DataType;

const RawDrugs: React.FC<props> = (props) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editModalInitInfo, setEditModalInitInfo] = useState<IRawDrugInfoForEditModal>(rawDrugsItemInitInfoForEditModal);
    const [selectedRawDrugItemId, setSelectedRawDrugItemId] = useState<string>(General.EMPTY_VALUE);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false);
    const [isDuplicateWarningModelOpen, setIsDuplicateWarningModelOpen] = useState<boolean>(false);
    const [isWarnRowColorVisible, setIsWarnRowColorVisible] = useState<boolean>(false);

    const { getAllRawDrugItems, addNewRawDrug, data, isLoading, AddRawDrug, editRawDrug, EditRawDrug, deleteRawDrug, DeleteRawDrug, resetRawDrugErrorCode } = props ?? {};

    const navigate = useNavigate();

    useEffect(() => {
        if (EditRawDrug?.data.rawDrugId != General.EMPTY_VALUE) {

        }

    }, [EditRawDrug])

    //get all available raw drug items
    useEffect(() => {
        if (IsTokenExpiredOrMissingChecker()) {
            navigate('/login');
        } else {
            getAllRawDrugItems({});
        }
    }, [AddRawDrug?.isLoading, EditRawDrug?.isLoading, DeleteRawDrug?.isLoading])

    useEffect(() => {
        if (AddRawDrug?.errorCode === 103) {
            setIsDuplicateWarningModelOpen(true);
        } else {
            setIsDuplicateWarningModelOpen(false);
        }
    }, [AddRawDrug?.errorCode])


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
        if (values) {
            addNewRawDrug(values);
        }

        actions.resetForm();
        setIsModalOpen(false);
        //addMovieRecords(values);
    }

    const onChange: CheckboxProps['onChange'] = (e) => {
        setIsWarnRowColorVisible(e.target.checked);
    };

    const submitEditInfo = (values: any, actions: AnyObject) => {
        const { itemNameEdit, categoryEdit, amountEdit, expirationDateEdit, measurementUnitEdit, reorderPointEdit } = values ?? {};
        const editData = {
            ItemName: itemNameEdit,
            ExpirationDate: expirationDateEdit,
            Category: categoryEdit,
            MeasurementUnit: measurementUnitEdit,
            Amount: amountEdit,
            ReorderPoint: reorderPointEdit
        }
        editRawDrug({ ...editData, id: selectedRawDrugItemId })
        actions.resetForm();
        setIsEditModalOpen(false);
    }

    const addRawDrug = () => {
        setIsModalOpen(true);
    }

    const confirmDeleteProcess = () => {
        if (selectedRawDrugItemId != "" || selectedRawDrugItemId != undefined) {
            deleteRawDrug(selectedRawDrugItemId)
            setIsConfirmationModalOpen(false);
        }
    }

    const abortDeleteProcess = () => {
        setIsConfirmationModalOpen(false)
    }

    const editDataRow = (rawData: any) => {
        const { id, itemName, expirationDate, category, measurementUnit, amount, reorderPoint } = rawData ?? {};
        setSelectedRawDrugItemId(id);
        setEditModalInitInfo({
            itemNameEdit: itemName,
            expirationDateEdit: expirationDate,
            categoryEdit: category,
            measurementUnitEdit: measurementUnit,
            amountEdit: extractNumber(amount),
            reorderPointEdit: extractNumber(reorderPoint)
        })
        setIsEditModalOpen(true);
    }

    const deleteDataRaw = (rawData: DataType) => {
        const { id } = rawData ?? {};
        setSelectedRawDrugItemId(id);
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
        ...(getAttributesFromToken(['role']).role === "Admin" ?
            [{
                title: 'Action',
                key: 'action',
                width: '10%',
                render: (_: any, record: any) => (
                    <Space size="middle">
                        <EditOutlined className="edit-pen-btn" onClick={() => { editDataRow(record) }} />
                        <DeleteOutlined className="delete-bin-btn" onClick={() => { deleteDataRaw(record) }} />
                    </Space>
                ),
            }] : [])
        ,

    ];

    const checkBoxTheme = {
        components: {
            Checkbox: {
                colorPrimary: "#00b96b",
                colorTextDisabled: "rgba(0,0,0,0.25)",
                colorPrimaryDisabled: "rgba(0,0,0,0.15)",
                colorPrimaryHover:"#409843"
            },
        },
    }

    return (
        <>
            <div>
                <div>
                    <h2>
                        Raw Drugs
                    </h2>
                    <hr />
                </div>
                {getAttributesFromToken(['role']).role === "Admin" &&
                    <>
                        <div>
                            <Button onClick={() => { setIsModalOpen(true) }} className="rawdrug-add-btn">
                                <PlusOutlined /> ADD
                            </Button>
                            <Button onClick={() => { navigate('/rawdrugs/storekeeper', { state: { from: Component.COMPONENT_NAME } }) }} className="store-keeper-btn">
                                <UserOutlined /> Store Keeper
                            </Button>
                        </div>
                        <hr />
                        <div>
                            <ConfigProvider theme={checkBoxTheme}>
                                <Checkbox onChange={onChange} className="hightlight-checkbox">
                                    Highlight records with low stock value.
                                </Checkbox>
                            </ConfigProvider>
                        </div>
                        <hr />
                    </>
                }
                <Skeleton active loading={isLoading}>
                    <Table<DataType>
                        columns={columns}
                        dataSource={TableDataHandler(data)}
                        className="table"
                        rowClassName={isWarnRowColorVisible ? tableRowColorHandler : ""} />
                </Skeleton>
                <>
                    <Modal
                        title="ADD NEW RAW DRUG ITEM"
                        open={isModalOpen}
                        onCancel={() => { setIsModalOpen(false) }}
                        footer={null}
                        className='raw-drug-modal'
                    >
                        <hr />
                        <Formik
                            initialValues={rawDrugsItemInitInfo}
                            onSubmit={submit}
                            validationSchema={RawDrugsValidationSchema}
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
                                        label={`Amount : ( ${values?.measurementUnit} )`}
                                        type="number"
                                        step="any"
                                        name="amount"
                                        placeholder="Enter Amount of the item..."
                                        isOnlyPositiveValues={true}
                                    />
                                    <br />
                                    <$Input
                                        label={`Reorder Point : ( ${values?.measurementUnit} )`}
                                        type="number"
                                        step="any"
                                        name="reorderPoint"
                                        placeholder="Enter Reorder Point of the item..."
                                        isOnlyPositiveValues={true}
                                    />
                                    <hr />
                                    <Button type="primary" htmlType="submit" className="form-submit-btn">Submit</Button>
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
                        className='raw-drug-modal'
                    >
                        <hr />
                        <Formik
                            initialValues={editModalInitInfo}
                            onSubmit={submitEditInfo}
                            validationSchema={EditDrugValidationSchema}
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
                                        label={`Amount : ( ${values?.measurementUnitEdit} )`}
                                        type="number"
                                        step="any"
                                        name="amountEdit"
                                        placeholder="Enter Amount of the item..."
                                        isOnlyPositiveValues={true}
                                    />
                                    <$Input
                                        label={`Reorder Point : ( ${values?.measurementUnitEdit} )`}
                                        type="number"
                                        step="any"
                                        name="reorderPointEdit"
                                        placeholder="Enter Reorder Point of the item..."
                                        isOnlyPositiveValues={true}
                                    />
                                    <hr />
                                    <Button type="primary" htmlType="submit" className="form-submit-btn">Submit</Button>
                                    <br />
                                    <br />
                                </Form>
                            )}
                        </Formik>
                    </Modal>

                </>
                <>
                    <Modal
                        title="DELETE CONFIRMATION!"
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
                </>
                <Modal
                    open={isDuplicateWarningModelOpen}
                    footer={null}
                    closable={false}
                >
                    <Result
                        status="warning"
                        title={
                            <>
                                Raw drug name already exists.<br />
                                Please use a unique name.
                            </>
                        }
                        extra={
                            <Button type="primary" key="console" onClick={() => {
                                setIsDuplicateWarningModelOpen(false)
                                resetRawDrugErrorCode(0);
                            }}>
                                Ok
                            </Button>
                        }
                    />
                </Modal>

            </div >
        </>
    );
};

const mapStateToProps = (state: any) => {
    const { RawDrugsReducer } = state;
    const { data, isLoading, AddRawDrug, EditRawDrug, DeleteRawDrug } = RawDrugsReducer;
    return {
        data,
        isLoading,
        AddRawDrug,
        EditRawDrug,
        DeleteRawDrug
    }
}

const mapDispatchToProps = {
    getAllRawDrugItems: RawDrugsActions.allRawDrugItems.get,
    addNewRawDrug: RawDrugsActions.addNewDrugItem.add,
    editRawDrug: RawDrugsActions.editRawDrugItem.edit,
    deleteRawDrug: RawDrugsActions.deleteRawDrug.delete,
    resetRawDrugErrorCode: RawDrugsActions.resetRawDrugErrorCode.reset
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(RawDrugs);

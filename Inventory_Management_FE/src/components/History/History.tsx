import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType, RadioChangeEvent, DatePickerProps, GetProps } from 'antd';
import { Button, Input, Modal, Space, Table, Skeleton, Tooltip, Radio, Flex, DatePicker, ConfigProvider } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import type { FilterDropdownProps } from 'antd/es/table/interface';
// @ts-ignore
import Highlighter from 'react-highlight-words';
import { connect, ConnectedProps } from 'react-redux';
import { getAttributesFromToken, IsTokenExpiredOrMissingChecker } from "../../GlobalFunctions/Functions.tsx"
import { useNavigate } from 'react-router-dom';
import { HistoryActions } from '../../actions/History/History.ts';
import { historyRecoredFormatter, recordsSorterByDate, exportToCSV, csvFileNameHandler } from './Functions/Functions.tsx';
import { ERROR_MESSAGE, General } from './Constants/Constants.ts';
import { IHistoryRecord } from './Interfaces/Interfaces.ts';


type props = propsFromRedux;
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

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
    const [pageSize, setPageSize] = useState(8);
    const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
    const [exportType, setExportType] = useState<number>(0);
    const [totalSelectedRecords, setTotalSelectedRecords] = useState<number>(0);
    const [sortedRecords, setSortedRecords] = useState<Array<IHistoryRecord>>([]);
    const [selectedDateRange, setSelectedDateRange] = useState<Array<string>>([]);
    const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false);

    const { data, isLoading, getAllHistoryRecords, deleteHistoryRecord, deleteHistoryRecordStatus } = props ?? {};

    const navigate = useNavigate();
    const { RangePicker } = DatePicker;

    

    useEffect(() => {
        // Calculate based on screen height
        const height = window.innerHeight;
        if (height < 700) setPageSize(5);
        else if (height < 900) setPageSize(10);
        else setPageSize(15);
    }, []);

    const options: CheckboxGroupProps<string>['options'] = [
        { label: 'Select all records', value: '0' },
        { label: 'Select records by date', value: '1' },
    ];

    //get all available raw drug items
    useEffect(() => {
        if (IsTokenExpiredOrMissingChecker()) {
            navigate('/login');
        } else {
            getAllHistoryRecords({});
        }
    }, [deleteHistoryRecordStatus?.data])

    useEffect(() => {
        if (exportType == 0) {
            setTotalSelectedRecords(data?.length);
            setSortedRecords(data);
            const startDate = data[0]?.time.split("T")[0];;
            const endDate = data[data?.length - 1]?.time.split("T")[0];

            setSelectedDateRange([startDate, endDate])
        }
        if (exportType == 1) {
            setTotalSelectedRecords(0);
            setSortedRecords([]);
        }

    }, [exportType, data])

    //delete a selected history record
    const handleDeleteHistoryRecord = (record: any) => {

        const { id } = record ?? {};
        setSelectedRawDrugItemId(id);
        setIsConfirmationModalOpen(true);
    }

    const exportingRecordSelector = (e: RadioChangeEvent) => {
        setExportType(e.target.value)
    }

    const dateRangeHandler = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        
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
        ...(getAttributesFromToken(['role']).role === "Admin" ? [{
            title: 'Action',
            key: 'action',
            width: '10%',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <DeleteOutlined className="delete-bin-btn" onClick={() => { handleDeleteHistoryRecord(record) }} />
                </Space>
            ),
        }] : [])
    ];

    const RadioGroupTheme = {
        components: {
            Radio: {
                colorPrimary: "#4CAF50", // primary color for checked state
                buttonSolidCheckedBg: "#4CAF50", // solid button background
                buttonSolidCheckedHoverBg: "#4CAF50", // hover color
                buttonSolidCheckedActiveBg: "#4CAF50", // active color
                buttonColor: "#333", // default text color
                buttonSolidCheckedColor: "#fff", // text color when checked
                dotSize: 10, // inner dot size
                radioSize: 18, // outer circle size
            },
        },
    };

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
                    <Table<DataType>
                        columns={columns}
                        dataSource={historyRecoredFormatter(data)}
                        className="history-table"
                        footer={() => (
                            <div
                                style={{
                                    textAlign: "right",
                                    paddingRight: "16px",
                                }}
                            >
                                <Button
                                    onClick={() => { setIsExportModalOpen(true) }}
                                    className="export-btn"
                                >
                                    Export
                                </Button>
                            </div>
                        )}
                        pagination={{
                            pageSize,
                            showSizeChanger: true,
                            pageSizeOptions: [5, 8, 15, 20],
                        }} />
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
            <Modal title="Export transaction to CSV format"
                open={isExportModalOpen}
                onOk={confirmDeleteProcess}
                onCancel={() => { setIsExportModalOpen(false) }}
                okText="Export"
                footer={[
                    // 👇 Custom footer buttons
                    <Button key="delete_export" style={{ backgroundColor: "#DC3545", borderColor: "#DC3545", color: "white" }}>
                        Delete and Export
                    </Button>,
                    <Button key="export" type="primary" onClick={() => {
                        if (sortedRecords.length > 0) {
                            setIsErrorVisible(false);
                            exportToCSV(csvFileNameHandler(selectedDateRange), sortedRecords);
                        } else {
                            setIsErrorVisible(true);
                        }
                    }} style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", color: "white" }}>
                        Export
                    </Button>,
                ]}>
                <hr />
                <div>
                    <p>Set a selection type: </p>
                    <Flex vertical gap="middle">
                        <ConfigProvider theme={RadioGroupTheme}>
                            <Radio.Group block options={options} defaultValue="0" onChange={exportingRecordSelector} />
                        </ConfigProvider>
                    </Flex>
                </div>
                <hr />
                {exportType == 0 && <div>
                    <p>
                        {`Total transaction records: ${totalSelectedRecords}`}
                    </p>
                </div>}
                {exportType == 1 && <div>
                    <p>Please select a date range:</p>
                    <RangePicker onChange={(value, dateString) => {
                        
                        
                        const sortedRecords = recordsSorterByDate(data, dateString);
                        setSortedRecords(sortedRecords);
                        setTotalSelectedRecords(sortedRecords?.length);
                        setSelectedDateRange([...dateString]);
                    }}
                    />
                    <hr />
                    <p>
                        {`Total transaction records: ${totalSelectedRecords}`}
                    </p>

                </div>
                }
                <hr />
                <>{isErrorVisible && <div className="error-msg">{ERROR_MESSAGE.NO_RECORDS}</div>}
                </>

            </Modal>
            {/* <>
                <h1>
                    Exporting Data
                </h1>
                <ExportCSV />
            </> */}
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

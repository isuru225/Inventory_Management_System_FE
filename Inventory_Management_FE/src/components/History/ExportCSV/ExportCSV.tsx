// src/components/ExportCSVButton.tsx
import React, { useState } from "react";
import axios from "axios";
import { connect, ConnectedProps } from "react-redux";
//import { Download } from "lucide-react"; // optional icon

const ExportCSV: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/export/csv`,
        { responseType: "blob" } // important for binary file data
      );

      // Create a download link for the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "exported_data.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading CSV:", error);
      alert("Failed to export data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-2xl shadow-md transition-all duration-200 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 active:scale-95"
        }`}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Exporting...
          </>
        ) : (
          <>
            {/* <Download size={18} /> */}
            Export CSV
          </>
        )}
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
    const { RegisterReducer } = state;
    const { data, isLoading } = RegisterReducer;
    return {
        data,
        isLoading
    }
}


const mapDispatchToProps = {
    
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>;
export default connector(ExportCSV);

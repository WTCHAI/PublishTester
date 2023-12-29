import React from 'react';
import { FaFileExport } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

type Props = {
  // You can add props as needed
};

export default function SearchHeader({}: Props) {
  const handleExportAsPDF = async () => {
    // const element = document.getElementById('element-to-export-as-pdf'); // Replace with the ID of the element you want to export
  
    // if (!element) {
    //   console.error('Element not found');
    //   return;
    // }
  
    // try {
    //   const canvas = await html2canvas(element);
    //   const imgData = canvas.toDataURL('image/png');
  
    //   const pdf = new jsPDF();
    //   pdf.addImage(imgData, 'PNG', 10, 10, 190, 277); // Adjust the x, y, width, and height parameters
    //   pdf.save('exportedData.pdf');
    // } catch (error) {
    //   console.error('Error exporting as PDF:', error);
    // }
  }

  return (
    <header className='flex flex-row justify-between items-center w-full'>
    <h1 className='text-5xl my-[3vh] text-BaseCharcoal'>Statement</h1>
    <button
      className="relative p-3 text-2xl hover:bg-gray-200 rounded-lg mr-5 text-BaseCharcoal"
      onClick={handleExportAsPDF}
    >
      <FaFileExport />
      <span className="absolute left-full top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded opacity-0 transition-opacity duration-300">
        Export as PDF
      </span>
    </button>
  </header>
  );
}
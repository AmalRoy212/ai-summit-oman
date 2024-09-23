// // Import necessary modules
// "use client";

// import React from 'react';
// import { Upload, Button, message } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from '@/src/conifgs/firebaseConfig';

// // Define the props for Upload component
// const props = {
//   name: 'file',
//   multiple: false,
//   beforeUpload(file: any) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//       message.error('You can only upload JPG/PNG file!');
//     }
//     return isJpgOrPng;
//   },
//   async onChange(info: any) {
//     if (info.file.status === 'done') {
//       const file = info.file.originFileObj;

//       // Generate a unique filename based on the current timestamp
//       const filename = `${Date.now()}.jpg`;

//       // Create a reference to the storage location
//       const imageRef = ref(storage, `hotelbookings/${filename}`);

//       try {
//         // Convert the file into a blob and upload it to Firebase
//         const blob = await fileToBlob(file);
//         await uploadBytes(imageRef, blob);

//         // Get the download URL once the upload is complete
//         const downloadUrl = await getDownloadURL(imageRef);

//         message.success(`${info.file.name} file uploaded successfully to Firebase`);

//         console.log('Firebase download URL:', downloadUrl);
//       } catch (error) {
//         message.error(`${info.file.name} file upload to Firebase failed.`);
//         console.error('Upload error:', error);
//       }
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };

// // Helper function to convert file to blob
// const fileToBlob = (file: any): Promise<Blob> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = function() {
//       const blob = new Blob([reader.result as ArrayBuffer], { type: file.type });
//       resolve(blob);
//     };
//     reader.onerror = function() {
//       reject(new Error('File read error'));
//     };
//     reader.readAsArrayBuffer(file);
//   });
// };

// // React component to render the upload button
// const UploadFiles = () => (
//   <Upload {...props}>
//     <Button icon={<UploadOutlined />}>Click to Upload</Button>
//   </Upload>
// );

// export default UploadFiles;


import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase methods
// import { storage } from "@/src/conifgs/firebaseConfig";

const ImageUpload = ({ handleSubmit, imagePreview } : { handleSubmit : (_event : any) => void, imagePreview : any}) => {

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Image
      </label>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-64 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V9a4 4 0 118 0v7M5 16h14M12 19v2M15 19v2M9 19v2"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">JPG, PNG (Max: 2MB)</p>
          </div>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleSubmit}
          />
        </label>
      </div>
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="mt-4 w-32 h-32 rounded-md object-cover"
        />
      )}
    </div>
  );
};

export default ImageUpload;

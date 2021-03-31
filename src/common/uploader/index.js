import React from 'react'
import { Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
const Uploader = ({selectImage}) => {
    const props = {
        name: 'photo',
        multiple: false,
        method:"post",
        url:"http://localhost:4000/upload-image",
        beforeUpload: file => {
            if (file.type !== 'image/png') {
                message.error(`${file.name} is not a png file`);
            }
            return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
        },
        onChange: info => {
            console.log(info.fileList);
        },
    };
    return (
        <Upload {...props} onChange={selectImage}>
            <Button icon={<UploadOutlined />}>Upload png only</Button>
        </Upload>
    );
};

export default Uploader
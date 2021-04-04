import { Button, Modal } from 'antd';
import React, { Component } from 'react';
import AddBunkerForm from './add-bunker';
import AddCateForm from './add-cate';
import AddProducerForm from './add-producer';
import AddUnitForm from './add-unit';

class ListAddFromProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            valueShowModal: ''
        }
    }
    setShowModal = (type) => {
        this.setState({
            showModal: true,
            valueShowModal: type
        })
    }
    renderModalContent = () => {
        switch (this.state.valueShowModal) {
            case "add-producer":
                return <AddProducerForm title="Thêm nhà sản xuất"/>
            case "add-unit":
                return <AddUnitForm title="Thêm Đơn vị tính"/>
            case "add-bunker":
                return <AddBunkerForm title="Thêm kho"/>
            case "add-cate":
                return <AddCateForm title="Thêm danh mục"/>
            default:
                break;
        }
    }
    render() {
        return (
            <>
                <Modal className="modal-add-list"
                    visible={this.state.showModal}
                    onCancel={() => { this.setState({ showModal: false }) }
                }
                >
                    {this.renderModalContent()}
                </Modal>
                <div className='btn-add-producer btn-add'>
                    <Button type="primary" onClick={() => this.setShowModal("add-producer")}>Thêm nhà sản xuất</Button>
                </div>
                <div className='btn-add-unit btn-add'>
                    <Button type="primary" onClick={() => this.setShowModal("add-unit")}>Thêm đơn vị tính</Button>
                </div>
                <div className='btn-add-cate btn-add'>
                    <Button type="primary" onClick={() => this.setShowModal("add-cate")}>Thêm danh mục</Button>
                </div>
                <div className='btn-add-bunker btn-add'>
                    <Button type="primary" onClick={() => this.setShowModal("add-bunker")}>Thêm kho hàng</Button>
                </div>


            </>
        );
    }
}

export default ListAddFromProduct;
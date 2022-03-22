import React, { Component } from "react";
import $ from "jquery";
import Cardd from "../components/card1";

class Agenda extends Component {
    constructor() {
        super()
        this.state = {
            note: [
                {
                    id: "12345", nama: "Hari Air Sedunia", tanggal: "2022-03-22",
                    id: "12346", nama: "Hari Meteorologi Sedunia", tanggal: "2022-03-23",

                }
            ],
            action: "",
            id: "",
            nama: "",
            tanggal: "",
            selectedItem: null,
        }
        this.state.filterNote = this.state.note
    }

    render() {
        return (
            <div className="container">
                <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({ keyword: ev.target.value })}
                    onKeyUp={ev => this.searching(ev)}
                />
                <div className="row">
                    {this.state.filterNote.map((item, index) => (
                        <Cardd

                            nama={item.nama}
                            tanggal={item.tanggal}

                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>

                    Tambah Event Note
                </button>
                {/* component modal sebagai control manipulasi data */}
                <div className="modal" id="modal_note">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Event Note
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Event
                                    <input type="text" className="form-control mb-2"

                                        value={this.state.nama}
                                        onChange={ev => this.setState({
                                            nama:
                                                ev.target.value
                                        })}
                                        required />

                                    Tanggal
                                    <input type="date" className="form-control mb-2" 
                                    

                                        value={this.state.tanggal}
                                        onChange={ev => this.setState({
                                            tanggal
                                                : ev.target.value
                                        })}
                                        required />

                                    
                                    <button className="btn btn-secondary btn-block" onClick={this.Close}>Batal</button> | <button className="btn btn-primary btn-block" type="submit">Simpan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    Close = () => {
        $("#modal_note").hide()
        }

        
    Add = () => {
        // menampilkan komponen modal
        $("#modal_note").show()
        this.setState({
            id: Math.random(1, 10000000),

            nama: "",
            tanggal: "",
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_note").show()
        this.setState({
            id: item.id,
            nama: item.nama,
            tanggal: item.tanggal,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state note
        let tempNote = this.state.note
        if (this.state.action === "insert") {
            // menambah data baru
            tempNote.push({
                id: this.state.id,
                nama: this.state.nama,
                tanggal: this.state.tanggal,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempNote.indexOf(this.state.selectedItem)
            tempNote[index].id = this.state.id
            tempNote[index].nama = this.state.nama
            tempNote[index].tanggal = this.state.tanggal
        }
        this.setState({ note: tempNote })
        // menutup komponen modal_note
        $("#modal_note").hide()
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempNote = this.state.note
            // posisi index data yg akan dihapus
            let index = tempNote.indexOf(item)
            // hapus data
            tempNote.splice(index, 1)
            this.setState({ note: tempNote })
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter
            let keyword = this.state.keyword.toLowerCase()
            let tempNote = this.state.note
            let result = tempNote.filter(item => {
                return item.nama.toLowerCase().includes(keyword)
            })
            this.setState({ filterNote: result })
        }
    }

}
export default Agenda;
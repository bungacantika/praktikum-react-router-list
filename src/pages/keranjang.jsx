import React, { Component } from "react";
import $ from "jquery";
import Card from "../components/card2";

class Keranjang extends Component {
    constructor() {
        super()
        this.state = {
            barang: [
                {
                    id: "12345", nama: "masker", harga: "50000",
                    jumlah: "2", total: 100000,
                    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsK678XDE8u9E-UDccKgfpwCjIUqoxNXJMDhYiNi1StKB7ZpsIh5MPFFDSB8Xqrg2ddc&usqp=CAU"
                },
            ],
            action: "",
            id: "",
            nama: "",
            harga: "",
            jumlah: "",
            total: 0,
            gambar: "",
            selectedItem: null,
        }
        this.state.filterBarang = this.state.barang
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
                    {this.state.filterBarang.map((item, index) => (
                        <Card

                            nama={item.nama}

                            harga={item.harga}
                            jumlah={item.jumlah}
                            total={item.harga * item.jumlah}
                            gambar={item.gambar}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>


                <button className="btn btn-success" onClick={() => this.Add()}>

                    Tambah Barang
                </button>
                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_barang">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Keranjang
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Barang
                                    <input type="text" className="form-control mb-2"

                                        value={this.state.nama}
                                        onChange={ev => this.setState({
                                            nama:
                                                ev.target.value
                                        })}
                                        required />

                                    Harga
                                    <input type="number" className="form-control mb-2"

                                        value={this.state.harga}
                                        onChange={ev => this.setState({
                                            harga
                                                : ev.target.value
                                        })}
                                        required />

                                    Jumlah
                                    <input type="number" className="form-control mb-2"

                                        value={this.state.jumlah}
                                        onChange={ev => this.setState({
                                            jumlah: ev.target.value
                                        })}
                                        required />            
                
                                    
                                    Gambar Barang
                                    <input type="url" className="form-control mb-2"

                                        value={this.state.gambar}
                                        onChange={ev => this.setState({
                                            gambar:
                                                ev.target.value
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
        $("#modal_barang").hide()
        }
        
    Add = () => {
        // menampilkan komponen modal
        $("#modal_barang").show()
        this.setState({
            id: Math.random(1, 10000000),

            nama: "",
            harga: "",
            jumlah: "",
            gambar: "",
            total: 0,
            action: "insert"
        })
    }


    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_barang").show()
        this.setState({
            id: item.id,
            nama: item.nama,
            harga: item.harga,
            jumlah: item.jumlah,
            gambar: item.gambar,
            total: item.total,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state barang
        let tempBarang = this.state.barang
        if (this.state.action === "insert") {
            // menambah data baru
            tempBarang.push({
                id: this.state.id,
                nama: this.state.nama,
                harga: this.state.harga,
                jumlah: this.state.jumlah,
                gambar: this.state.gambar,
                total: this.state.total,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempBarang.indexOf(this.state.selectedItem)
            tempBarang[index].id = this.state.isbn
            tempBarang[index].nama = this.state.nama
            tempBarang[index].harga = this.state.harga
            tempBarang[index].jumlah = this.state.jumlah
            tempBarang[index].gambar = this.state.gambar
            tempBarang[index].total = this.state.total
        }
        this.setState({ barang: tempBarang })
        // menutup komponen modal_barang
        $("#modal_barang").hide()
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempBarang = this.state.barang
            let updateHarga = 0
            let total = this.state.total

            // posisi index data yg akan dihapus
            let index = tempBarang.indexOf(item)

            updateHarga = total - (item.harga * item.jumlah)
            tempBarang.splice(index, 1)
            this.setState({ 
                barang: tempBarang,
                total: updateHarga
            
            })
            localStorage.setItem("barang", JSON.stringify(tempBarang))
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter
            let keyword = this.state.keyword.toLowerCase()
            let tempBarang = this.state.barang
            let result = tempBarang.filter(item => {
                return item.nama.toLowerCase().includes(keyword)
            })
            this.setState({ filterBarang: result })
        }
    }

}
export default Keranjang;
import React from "react"

class Cardd extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">

                        {/* menampilkan deskripsi */}
                        <div>
                            <h6 className="text-info">

                                {this.props.nama}
                            </h6>

                            <h6 className="text-dark">
                                Tanggal: {this.props.tanggal}
                            </h6>

                            
                            {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-info m-1" onClick={this.props.onEdit}>
                                Edit
                            </button>
                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cardd;
import styles from './style.module.css';

function Produtos({ produtos }) {
    return (
        <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">

            {produtos?.map((product) =>(
                
                <div className="col" key={product.id}>
                    <a href={product.saida}>
                        <div className="card card-product">
                            <div className="card-body">

                                <div className="text-center position-relative ">
                                    <div className=" position-absolute top-0 start-0">
                                        <span className="badge bg-danger">OFERTA RELAMPAGO</span>
                                    </div>

                                    <a href={product.saida} target="_blank">
                                        <img src={product.img} alt={product.name}/>
                                    </a>
                                </div>

                                <h2 className="fs-6">
                                    <a href={product.saida} target="_blank" className="text-inherit text-decoration-none">
                                        {product.name}
                                    </a>
                                </h2>

                                <div>
                                    <span className="text-muted small">Frete Grátis</span>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                        <span className="h4 text-dark">R$ {product.preco}</span>
                                    </div>
                                </div>

                                <div className="d-grid mt-2">
                                    <a href={product.saida} target="_blank" className="btn btn-primary ">VER OFERTA</a>
                                </div>

                            </div>
                        </div>
                    </a>
                </div>

            )
            )}

        </div>
    )
}

export default Produtos
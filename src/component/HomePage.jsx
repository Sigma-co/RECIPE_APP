import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
    return (
        <div>
           
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://wallpapers.com/images/featured/food-4k-1pf6px6ryqfjtnyr.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://cdn.pixabay.com/photo/2023/05/14/13/58/background-7993019_1280.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://assets.cntraveller.in/photos/60ba1de12267328f9d2456f0/master/pass/dosa-recipes-1366x768.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://img.freepik.com/free-photo/grilled-beef-pork-with-fresh-guacamole-generated-by-ai_188544-38177.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">South Indian</h5>
                                <p class="card-text">Variety Of Spicy And Sweet Dishes</p>
                                <a href="#" class="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2016/01/mastkalandar-f.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">North Indian Cuisine</h5>
                                <p class="card-text">Flavourful Gravy</p>
                                <a href="#" class="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSII0ekhpwl96EQsYGODHMLMboutj-l2E0FAg&s" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Chinese Specials</h5>
                                <p class="card-text">Fresh And Spicy</p>
                                <a href="#" class="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://workinjapan.today/wp-content/uploads/2020/09/chirashi-zushi-hamaguri-no-osuimono-e1604647044902.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Japanese specials</h5>
                                <p class="card-text">Noodles And Rolls</p>
                                <a href="#" class="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://www.bistromd.com/cdn/shop/articles/healthy-oktoberfest-menu-ideas-wellness-meets-tradition.jpg?v=1695670275" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">German American Cuisine</h5>
                                <p class="card-text">Wide Range Of Fried Foods </p>
                                <a href="#" class="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://media.istockphoto.com/id/913545918/photo/homemade-southern-crawfish-boil.jpg?s=612x612&w=0&k=20&c=L0Uw6qbS4t5s5eRHxityNe3aEjvrtVQ2RomMYCPVGXE=" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Cajun</h5>
                                <p class="card-text">Rich Flavour And Heartly Ingredients </p>
                                <a href="#" class="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

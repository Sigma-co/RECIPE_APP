import React from 'react'
import Navbar from './Navbar'

const AddRecipe = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Creator</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Description</label>
                    <input type="text" className="form-control" />
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label class="input-group-text" for="inputGroupFile01">Upload Image</label>
  <input type="file" class="form-control" id="inputGroupFile01"></input>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Veg/Non-Veg
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Veg</a></li>
    <li><a class="dropdown-item" href="#">Non-Veg</a></li>
    
  </ul>
</div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Ingredients</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button type="button" class="btn btn-primary">Register Now</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe

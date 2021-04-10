import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-muted fixed-top bg-secondary">
            <a href="/" class="navbar-brand px-3 text-light">Class Manager</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item text-muted"></li>
                </ul> 
            </div>
        </nav>  
    )
}

export default Navbar

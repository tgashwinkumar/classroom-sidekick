import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <section class="jumbotron text-center bg-light py-5 px-5 ">
            <div class="container ">
                <h1 class="jumbotron-heading">
                    Class Scheduler
                </h1>
                <p class="lead text-muted w-75 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga sequi quam ipsum voluptatem maxime porro ad voluptatibus ex inventore, ratione dignissimos ullam ipsa, cupiditate quisquam maiores nesciunt? Repudiandae, cum.
                </p>
                <p>
                    {/* <a href="/scheduler" class="btn btn-primary">Open Scheduler</a> */}
                    <Link to="/scheduler"><div class="btn btn-primary"> Open Scheduler </div></Link>
                </p>
            </div>
        </section>
        <section class="jumbotron text-center bg-dark py-5 px-5">
            <div class="container ">
                <h1 class="jumbotron-heading text-light">
                    Check Classrooms
                </h1>
                <p class="lead text-muted w-75 mx-auto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quisquam dolore est nostrum impedit. Doloribus dolorem recusandae hic. Rem deserunt eius pariatur sapiente eos magnam id animi nisi aperiam dolores.
                </p>
                <p>
                    <a href="/" class="btn btn-secondary text-light">Open Organizer</a>
                </p>
            </div>
        </section>
        </>
    )
}

export default Home

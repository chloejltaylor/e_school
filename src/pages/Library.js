import React from 'react'
import "../css/Library.css"

function Library() {
    return (
        <div className="main-page" id="library-page">
           <section id="library-header">
               <div className="header-wrapper">
                    <div className="buttons">
                        <button type="button" className="primary-button">
                            Subject/English
                        </button>
                        <button type="button" className="primary-button">
                            Newest upload
                        </button>
                    </div>
                    <div className="search">
                    
                        <button type="button" className="primary-button">
                            Go                        
                        </button>
                    </div>
               </div>
           </section>
           <section id="library-books">
                <h2>Books</h2> 
           </section>
           <section id="library-videos">
                <h2>Videos</h2>  
           </section>
           <section id="library-footer">
                <h2>Materials &amp; Links</h2>   
           </section>
        </div>
    )
}

export default Library

import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchModalModules } from '~/CssModules';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = SearchModalModules();

function SearchModal({ handle, visible }) {
    const [searchText, setSearchText] = useState('')

    function handleSearch(value){
        setSearchText(value)
    }

    return (
        <>
            <Modal show={visible} fullscreen={true}>
                <div className={cx('wrapper')}>
                    <Modal.Header className="mb-5 border-0">
                        <h2 className={cx('title', 'd-inline')}>What are you looking for?</h2>
                        <div
                            className={cx('close', 'd-inline')}
                            onClick={() => {
                                handle(false);
                            }}
                        >
                            <span className="me-2">close</span>
                            <FontAwesomeIcon className="fs-4" icon={faXmark} />
                        </div>
                    </Modal.Header>

                    <Modal.Body>
                        <div className={cx('search-bar','d-flex')}>
                            <input className='outline-0' name="search" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
                            <button className={cx('btn-search')}> 
                                <Link to={`/products/?search=${searchText}`}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </Link>
                            </button>
                        </div>

                        <div className={cx('search-result')}>{searchText}</div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
}

export default SearchModal;

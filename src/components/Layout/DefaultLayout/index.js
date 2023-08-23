import { Children, useRef, cloneElement } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useImperativeHandle, useEffect } from 'react';


function DefaultLayout({ children }) {
    const childrenName = children.type.name

    return (
        <div className="position-relative">
            <Header typeName={childrenName} />

            <div className="">
                <div className="content">
                    {children}
                    {/* {Children.map(children, (child) => {
                        return cloneElement(child, {
                            overlayUrl: url,
                        });
                    })} */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

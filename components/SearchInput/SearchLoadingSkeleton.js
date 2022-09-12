import React from 'react'
import Skeleton from 'react-loading-skeleton';

const SearchLoadingSkeleton = () => {
    const total = [1, 2];
    return (
        <div>
            {
                total.map((item) => (
                    <div className="row py-2 align-items-center" key={item}>
                        <div className="col-4 col-sm-2">
                            <div className="ml-0 ml-md-3">
                                <Skeleton height={70} width={70} />
                            </div>
                        </div>
                        <div className="col-8">
                            <p>
                                <Skeleton count={1} />
                            </p>
                            <p>
                                <Skeleton count={1} width={50} />
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default SearchLoadingSkeleton;
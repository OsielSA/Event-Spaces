import React from 'react';

const Card = ({ idPackage, title, description, price, selected, onClick, hasError }) => {
  const inputClass = hasError ? 'border-red-500' : 'border-gray-300';
    return (
        <div
            className={`w-full py-1 px-4 border rounded-lg ${selected ? 'border-blue-500' : inputClass} cursor-pointer`}
            onClick={() => onClick(idPackage)}
        >
            <div className="flex justify-between">
                <div className="flex flex-col pr-5">
                    <h2 className="text-sm font-semibold">{title}</h2>
                    <p className="text-sm text-gray-600 pr-5">{description}</p>
                </div>
                <div className="text-right">
                    <p className="text-gray-800">${price.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

const PackageSelector = ({ packages, onSelect, hasError }) => {
  return (
    <div className="flex flex-col w-full items-center space-y-2 mb-4">
      {packages.map((pack) => (
        <div key={pack.idPackage} className='w-full'>
          <Card
            idPackage={pack.idPackage}
            title={pack.packageName}
            description={pack.packageDescription}
            price={pack.price}
            selected={pack.selected}
            onClick={onSelect}
            hasError={hasError}
          />
        </div>
      ))}
    </div>
  );
};

export default PackageSelector;

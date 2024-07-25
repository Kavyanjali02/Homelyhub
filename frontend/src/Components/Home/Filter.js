import React, { useEffect, useState } from 'react';
import FilterModal from './FilterModal';
import {  useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";


const Filter = () => {
  //state for controlling modal visibility
   const [isModalOpen, setIsModalOpen] =useState(false);
   const [selectedFilters, setSelectedFilters]=useState({});
   //state for storing selected filters
   const dispatch=useDispatch();
     useEffect(()=>{
      dispatch(propertyAction.updateSearchParams(selectedFilters));
      dispatch(getAllProperties());
     }, [selectedFilters,dispatch]);

   //fuction to handle opening the modal/popup window
  const handleOpenModal = () =>{
    setIsModalOpen(true);//set isModalOpen to true to open the modal
  };

  //fuction to handle closing the modal/popup window
  const handleCloseModal = () =>{
    setIsModalOpen(false);//set isModalOpen to false to close the modal
  };
  
  //fuction to handle changes in filters
  const handleFilterChange = (filterName,value) =>{
    //update selected filters with new values
    setSelectedFilters((prevFilters) =>({
      ...prevFilters,
      [filterName]:value,
    }));
  };
   return (
    <>
    {/* click event to open the modal */}
    <span class="material-symbols-outlined filter"onClick={handleOpenModal}>tune</span>
   
    {isModalOpen && (<FilterModal
      selectedFilters={selectedFilters}
      onFilterChange={handleFilterChange}
      onClose={handleCloseModal}
      />
   )}
      </>
  );
};

export default Filter;

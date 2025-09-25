import { useState } from "react";


export const useResponsive=()=>{
     const [sidebarOpen, setSidebarOpen] = useState(false);
     

  const phoneToggleMenu = () => {
   setSidebarOpen((prev) => !prev);
  };
  const closeMenuIcon = () => {
    setSidebarOpen(false);
  };

  return{
    sidebarOpen,
    phoneToggleMenu,
    closeMenuIcon
  }
}
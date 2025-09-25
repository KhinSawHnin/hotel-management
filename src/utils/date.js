export function formatCreatedAt(dateString) {
    const date = new Date(dateString);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice();
  
    // let hours = date.getHours();
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const ampm = hours >= 12 ? ' PM' : ' AM';
  
    // hours = hours % 12 || 12;
  
    return `${day}-${month}-${year}`;
  }
  
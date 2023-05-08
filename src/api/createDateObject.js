const createDateObject = (obj, type = 'date') => {
   switch(type) {
      case 'date':
         return {
            target: {
               name: 'date',
               value: `${obj.$D}/${obj.$M + 1}/${obj.$y}`
            }
         }
      case 'time':
         return {
            target : {
               name: 'time',
               value: `${obj.$H}:${obj.$m}`
            }
         }
      default: 
         throw new Error(`wrong type, must be 'date' or 'time'`);
   }
}

export default createDateObject
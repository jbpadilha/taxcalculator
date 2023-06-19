export const debounce = (func: Function, delay: number): any => {
    let timer: NodeJS.Timeout;
    
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
};
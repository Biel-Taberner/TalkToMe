export const changeTheme = (e: React.ChangeEvent<HTMLInputElement>, setThemeToggler) => {
    const newTheme = !e.target.checked ? "dark" : "light";
    localStorage.setItem("currentDataTheme", newTheme);
    localStorage.setItem("checked", String(e.target.checked));
    setThemeToggler(e.target.checked);
    
    document.documentElement.setAttribute("data-theme", newTheme);
};
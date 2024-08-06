interface MenuItem {
    id: number;
    page:string;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [
    
    {
        id: 1,
        page:"nav_1",
        has_dropdown: true,
        title: "Home",
        link: "#",
        sub_menus: [
            { link: "/", title: "ICO Investment" },
            { link: "/home-two", title: "Blockchain", },
        ],
    },
    {
        id: 2,
        page:"nav_1",
        has_dropdown: false,
        title: "Feature",
        link: "/#feature",
    },
    {
        id: 3,
        page:"nav_1",
        has_dropdown: false,
        title: "RoadMap",
        link: "/#roadMap",
    },
    {
        id: 4,
        page:"nav_1",
        has_dropdown: false,
        title: "Blog",
        link: "https://mirror.xyz/0x77C98B20639E16882B9445f627e5292f1B7471ef",
        sub_menus: [
            { link: "/blog", title: "Our Blog" },
            { link: "/blog-details", title: "Blog-Details", },
        ],
    },
    {
        id: 5,
        page:"nav_1",
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
    
    {
        id: 1,
        page:"nav_2",
        has_dropdown: false,
        title: "Home",
        link: "https://mobl3.xyz",
        sub_menus: [
            { link: "/home-two", title: "Blockchain" },
            { link: "/home-two", title: "Blockchain", },
        ],
    },
    {
        id: 2,
        page:"nav_2",
        has_dropdown: false,
        title: "Docs",
        link: "https://docs.mobl3.xyz",
    },
    {
        id: 3,
        page:"nav_2",
        has_dropdown: false,
        title: "BLOG",
        link: "https://mirror.xyz/0x77C98B20639E16882B9445f627e5292f1B7471ef",
    },
    {
        id: 4,
        page:"nav_2",
        has_dropdown: true,
        title: "community",
        link: "",
        sub_menus: [
            { link: "https://x.com/mobl3xyz", title: "Twitter" },
            { link: "https://discord.com/invite/", title: "Discord", },
        ],
    },
];
export default menu_data;

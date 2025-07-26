import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"


interface ILayoutProps {
  children: React.ReactNode;
}
const Layout = ({children}: ILayoutProps) => {
    return (
        <>
            <Header></Header>
            <div style={{ minHeight: "700px" }}>{children}</div>
            <Footer></Footer>
        </>
    )
}

export default Layout
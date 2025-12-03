import Breadcrumb from "../components/Breadcrumb";

const Category = () => {
  return (
    <>
      <Breadcrumb
        title="Kategoriler"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        imageUrl="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600"
        breadcrumb={{ left: "Anasayfa", right: "Kategoriler" }}
      />
    </>
  )
}

export default Category

import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://i.ibb.co/VCKQCkF/casa.png',
        name: 'hogar'
    },
    {
        image: 'https://i.ibb.co/JtYHT7y/televisor.png',
        name: 'electro'
    },
    {
        image: 'https://i.ibb.co/wg4TkgK/smartphone.png',
        name: 'celulares'
    },
    {
        image: 'https://i.ibb.co/DkmrLzm/instrumentos.png',
        name: 'herramientas'
    },
    
    {
        image: 'https://i.ibb.co/6Rq0f15/libro.png',
        name: 'libros'
    },
   
]
const Category = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                <div className="flex overflow-x-scroll md:justify-center lg:justify-center lg:overflow-hidden justify-center text-center">
                    {category.map((item, index) => {
                        return (
                            <div key={index} className="px-3 lg:px-10 lg:flex-shrink-0">
                                <div onClick={() => navigate(`/category/${item.name}`)} className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-blue-200 transition-all hover:bg-blue-700 cursor-pointer mb-1">
                                    <div className="flex justify-center mb-12">
                                        <img src={item.image} alt="img" />
                                    </div>
                                </div>
                                <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase'>{item.name}</h1>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Category;
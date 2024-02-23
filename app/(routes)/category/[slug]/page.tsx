interface CategoryPageProps {
    params: {
        slug: string
    }
    searchParams: {
        slug: string
    }
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
                                                             params,
                                                             searchParams
                                                         }) => {
    console.log('params', params)
    console.log('searchParams', searchParams)

    return <div>test</div>
}

export default CategoryPage
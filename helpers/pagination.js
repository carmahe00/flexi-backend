const getPagination = (page, size) => {
    const limit = size ? +size : 5;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {

    const { count: totalPedidos, rows: pedidos } = data;
    const currentPage = page ? +page : 0;

    const totalPages = Math.ceil(totalPedidos / limit);

    return { totalPedidos, pedidos, totalPages, currentPage };
};


module.exports = {
    getPagination,
    getPagingData
}
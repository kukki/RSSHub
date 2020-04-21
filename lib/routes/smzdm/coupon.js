const got = require('@/utils/got');

module.exports = async (ctx) => {
  const mall = ctx.params.mall || 0;
  const response = await got({
    method: 'get',
    url: `https://duihuan.smzdm.com/coupon/ajax_index_coupon_page/?cate_id=0&page=1&order=new&mall_id=${mall}`,
    headers: {
      Referer: `https://duihuan.smzdm.com/`
    },
  });

  const data = response.data.data.rows;

  ctx.state.data = {
    title: `SMZDM Coupon`,
    link: `https://duihuan.smzdm.com/coupon`,
    description: `SMZDM Coupon`,
    item: data.map((item) => ({
      title: item.title,
      description: item.title,
      link: `https://duihuan.smzdm.com/p/${item.id}`
    }))
  };
};

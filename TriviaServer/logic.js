
module.exports.parseProductData = function(data, callback){
    var categoryNames = {};
    var categories = [];
    var returnObject = {};
    var products = {};
    for(var item of data){
        if(categoryNames[item.id] === undefined){
            categoryNames[item.id] = item.category_name;
            categories.push({ id: item.id, name: item.category_name });
            products[item.id] = [
                {   product_name: item.product_name, 
                    product_link: item.product_link, 
                    category_name: item.category_name,
                    id: item.id }]
        } else{
            products[item.id].push(
                {   product_name: item.product_name, 
                    product_link: item.product_link, 
                    category_name: item.category_name,
                    id: item.id });
        }
    }
    returnObject['categories'] = categories;
    returnObject['categorySize'] = categories.length;
    returnObject['products'] = products;
    return callback(returnObject);
}
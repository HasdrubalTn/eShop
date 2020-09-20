using Core.Entities;

namespace Core.Specifications
{

    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(ProductSpecificationParams specificationParams)
            : base(x => 
                    (!specificationParams.BrandId.HasValue || x.ProductBrandId == specificationParams.BrandId) &&
                    (!specificationParams.TypeId.HasValue || x.ProductTypeId == specificationParams.TypeId)
                  )
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
            ApplyPaging(specificationParams.PageSize * (specificationParams.PageIndex -1), specificationParams.PageSize);

            if (!string.IsNullOrEmpty(specificationParams.Sort))
            {
                switch (specificationParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(x => x.Price);
                        break;

                    case "priceDesc":
                        AddOrderByDescending(x => x.Price);
                        break;

                    default:
                        AddOrderBy(x => x.Name);
                        break;
                }
            }
            else
            {
                AddOrderBy(x => x.Name);
            }
        }

        public ProductsWithTypesAndBrandsSpecification(int id)
            : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}

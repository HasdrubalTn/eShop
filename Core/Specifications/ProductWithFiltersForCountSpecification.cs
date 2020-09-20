using Core.Entities;

namespace Core.Specifications
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductSpecificationParams specificationParams)
            : base(x =>
                    (!specificationParams.BrandId.HasValue || x.ProductBrandId == specificationParams.BrandId) &&
                    (!specificationParams.TypeId.HasValue || x.ProductTypeId == specificationParams.TypeId)
                  )
        { 

        }
    }
}

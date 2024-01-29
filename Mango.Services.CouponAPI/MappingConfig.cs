using AutoMapper;
using Mango.Services.CouponAPI.Models;
using Mango.Services.CouponAPI.Models.DTOs;

namespace Mango.Services.CouponAPI
{
    public class MappingConfig : Profile
    {
        public MappingConfig() {
            CreateMap<Coupon, CouponDto>();
            CreateMap<CouponDto, Coupon>();
        }
    }
}

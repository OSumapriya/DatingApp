using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extentions
    {
        public static void AddAplicationError(this HttpResponse response,string message)
        {
            response.Headers.Add("ApplicationError", message);
            response.Headers.Add("Access-control-Expose-Header" , "ApplicationError");
            response.Headers.Add("Access-control-Allow-Origin" , "*");
        }

        public static int CalculateAge(this DateTime theDateTime)
        {
                var age= DateTime.Today.Year - theDateTime.Year;
                if(theDateTime.AddYears(age) > DateTime.Today)
                {
                  age--;  
                }
                     
                return age;
        }
    }
}
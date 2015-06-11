using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Parse;

namespace ParseProxy
{
    public sealed class ParseProxy
    {
        public static void Initialize(string appId, string clientKey)
        {
            ParseClient.Initialize(appId, clientKey);
        }

        public static string Subscribe(string channel)
        {
            try {
                ParsePush.SubscribeAsync(channel);
            }
            catch(Exception e) {
                return e.ToString();
            }

            return "SUBSCRIBE WORKED!";
        }

        public static void TrackOpened()
        {
            ParseAnalytics.TrackAppOpenedAsync();
        }
    }
}

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const {GoogleAuthModel} = require("./user.google.model");
const { v4: uuidv4 } = require("uuid");

passport.use(
  new GoogleStrategy(
    {
      clientID:"813611519801-jrr5tt5398p5qalk0307qkejtc1id98j.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:8080/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {

            let email = profile._json.email;
            let name=profile._json.name;
         
              const user = new GoogleAuthModel({
                email,
                password: uuidv4(),
                name,
                token:accessToken
              });
              await user.save();
              const { _id, password} = user;
              const payload = {
                _id,
                name,
                email,
                password,
                url: profile._json.picture,
                accessToken
              };
            //   console.log(profile)
              return cb(null, payload);
        }
 
    
  )
);

module.exports = passport;

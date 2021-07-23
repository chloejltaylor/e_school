To generate a secret:

require("crypto").randomBytes(64).toString("hex")
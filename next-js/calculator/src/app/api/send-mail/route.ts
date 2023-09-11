import type { NextApiRequest, NextApiResponse } from "next";
// import { render } from "@react-email/render";
import WelcomeTemplate from "../../emails/WelcomeTemplate";
import { sendEmail } from "../../lib/email";


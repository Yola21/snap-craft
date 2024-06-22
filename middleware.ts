import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
  // ignoredRoutes: ["/api/webhooks(.*)"],
  publicRoutes: ["/api/webhooks(.*)"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
  publicRoutes: ['/'],
  ignoredRoutes: ["/api/webhooks(.*)"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
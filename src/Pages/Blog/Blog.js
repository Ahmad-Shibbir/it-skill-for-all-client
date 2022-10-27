import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='blog'>
                <h1>what is cors?</h1>

                <p> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                <p>
                    For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
                </p>
                <p>
                    The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.
                </p>
            </div>
            <div className='blog'>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>

                <p> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                <p>
                Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
                </p>
                
            </div>
            <div className='blog'>
                <h1>What is Node? How does Node work?</h1>

                <p>  Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.</p>
                <p>
                In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.
                </p>
                
            </div>
            <div className='blog'>
                <h1>How does the private route work?</h1>

                <p> Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                <p>
                The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </p>
                
            </div>
        </div>
    );
};

export default Blog;
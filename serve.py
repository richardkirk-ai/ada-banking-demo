#!/usr/bin/env python3
"""Tiny static server for local preview: python3 serve.py  ->  http://localhost:8000"""
import http.server, socketserver
PORT = 8000
h = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), h) as httpd:
    print(f"Ada Banking demo running at http://localhost:{PORT}  (Ctrl+C to stop)")
    httpd.serve_forever()

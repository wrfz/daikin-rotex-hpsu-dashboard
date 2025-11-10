/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $24c52f343453d62d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $24c52f343453d62d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $24c52f343453d62d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $24c52f343453d62d$var$ownKeys = function(o) {
    $24c52f343453d62d$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $24c52f343453d62d$var$ownKeys(o);
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $24c52f343453d62d$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $24c52f343453d62d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $24c52f343453d62d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $24c52f343453d62d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $24c52f343453d62d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $24c52f343453d62d$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $24c52f343453d62d$export$2e2bcd8739ae039 = {
    __extends: $24c52f343453d62d$export$a8ba968b8961cb8a,
    __assign: $24c52f343453d62d$export$18ce0697a983be9b,
    __rest: $24c52f343453d62d$export$3c9a16f847548506,
    __decorate: $24c52f343453d62d$export$29e00dfd3077644b,
    __param: $24c52f343453d62d$export$d5ad3fd78186038f,
    __esDecorate: $24c52f343453d62d$export$3a84e1ae4e97e9b0,
    __runInitializers: $24c52f343453d62d$export$d831c04e792af3d,
    __propKey: $24c52f343453d62d$export$6a2a36740a146cb8,
    __setFunctionName: $24c52f343453d62d$export$d1a06452d3489bc7,
    __metadata: $24c52f343453d62d$export$f1db080c865becb9,
    __awaiter: $24c52f343453d62d$export$1050f835b63b671e,
    __generator: $24c52f343453d62d$export$67ebef60e6f28a6,
    __createBinding: $24c52f343453d62d$export$45d3717a4c69092e,
    __exportStar: $24c52f343453d62d$export$f33643c0debef087,
    __values: $24c52f343453d62d$export$19a8beecd37a4c45,
    __read: $24c52f343453d62d$export$8d051b38c9118094,
    __spread: $24c52f343453d62d$export$afc72e2116322959,
    __spreadArrays: $24c52f343453d62d$export$6388937ca91ccae8,
    __spreadArray: $24c52f343453d62d$export$1216008129fb82ed,
    __await: $24c52f343453d62d$export$10c90e4f7922046c,
    __asyncGenerator: $24c52f343453d62d$export$e427f37a30a4de9b,
    __asyncDelegator: $24c52f343453d62d$export$bbd80228419bb833,
    __asyncValues: $24c52f343453d62d$export$e3b29a3d6162315f,
    __makeTemplateObject: $24c52f343453d62d$export$4fb47efe1390b86f,
    __importStar: $24c52f343453d62d$export$c21735bcef00d192,
    __importDefault: $24c52f343453d62d$export$da59b14a69baef04,
    __classPrivateFieldGet: $24c52f343453d62d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $24c52f343453d62d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $24c52f343453d62d$export$81fdc39f203e4e04,
    __addDisposableResource: $24c52f343453d62d$export$88ac25d8e944e405,
    __disposeResources: $24c52f343453d62d$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $24c52f343453d62d$export$889dfb5d17574b0b
};


const $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16 = [
    {
        id: "ta",
        label_rect_id: "ta_label",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        value_rect_id: "ta_val",
        offset: 6,
        category: {
            de: "Oben",
            en: "Top",
            it: "In alto"
        },
        texts: {
            de: {
                label: "TA",
                desc: "TA - Au\xdfentemperatur"
            },
            en: {
                label: "TA",
                desc: "TA - Outside Temperature"
            },
            it: {
                label: "TA",
                desc: "TA - Temperatura esterna"
            }
        }
    },
    {
        id: "ta2",
        label_rect_id: "ta2_label",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        value_rect_id: "ta2_val",
        offset: 6,
        optional: true,
        parent: "TA2",
        texts: {
            de: {
                label: "TA2",
                desc: "TA2 - Im Au\xdfenger\xe4t"
            },
            en: {
                label: "TA2",
                desc: "TA2 - In the outdoor unit"
            },
            it: {
                label: "TA2",
                desc: "TA2 - Nell'unit\xe0 esterna"
            }
        }
    },
    {
        id: "expansion_valve",
        label_rect_id: "eev_label",
        domain: "sensor",
        device: "UART",
        unit: "pls",
        value_rect_id: "eev_val",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "EEV",
                desc: "Elektonisches Expansionsventil"
            },
            en: {
                label: "EEV",
                desc: "Electronic Expansion Valve"
            },
            it: {
                label: "EEV",
                desc: "Valvola di espansione elettronica"
            }
        }
    },
    {
        id: "pressure_equalization",
        domain: "binary_sensor",
        device: "UART",
        texts: {
            de: {
                desc: "Druckausgleich"
            },
            en: {
                desc: "Pressure equalization"
            },
            it: {
                desc: "Equalizzazione della pressione"
            }
        }
    },
    {
        id: "kondensat",
        label_rect_id: "kondensat_label",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        value_rect_id: "kondensat_value",
        offset: 6,
        texts: {
            de: {
                label: "Kondensat",
                desc: "Kondensat"
            },
            en: {
                label: "Condensate",
                desc: "Condensate"
            },
            it: {
                label: "Condensato",
                desc: "Condensato"
            }
        }
    },
    {
        id: "umwaelzpumpe",
        label_rect_id: "uwp_label",
        domain: "sensor",
        device: "CAN",
        unit: "%",
        value_rect_id: "uwp_value",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "Umw\xe4lzpumpe",
                desc: "Umw\xe4lzpumpe"
            },
            en: {
                label: "Circulation pump",
                desc: "Circulation pump"
            },
            it: {
                label: "Pompa circ.",
                desc: "Pompa di circolazione"
            }
        }
    },
    {
        id: "umwaelzpumpe_an_aus",
        domain: "binary_sensor",
        device: "CAN",
        value_rect_id: "circ_pump_rect",
        offset: 2,
        fontSize: "30px",
        texts: {
            de: {
                desc: "Status Umw\xe4lzpumpe"
            },
            en: {
                desc: "Circulation pump status"
            },
            it: {
                desc: "Stato pompa di circolazione"
            }
        }
    },
    {
        id: "durchfluss",
        domain: "sensor",
        device: "CAN",
        unit: "L/h",
        label_rect_id: "flow_rate_label",
        value_rect_id: "flow_rate_value",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "Durchfluss",
                desc: "Durchfluss"
            },
            en: {
                label: "Flow rate",
                desc: "Flow rate"
            },
            it: {
                label: "Portata",
                desc: "Portata"
            }
        }
    },
    {
        id: "ruecklauf_1",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "return_flow_label",
        value_rect_id: "return_flow_can_value",
        offset: 6,
        texts: {
            de: {
                label: "R\xfccklauf",
                desc: "R\xfccklauf - CAN"
            },
            en: {
                label: "Return flow",
                desc: "Return flow - CAN"
            },
            it: {
                label: "Ritorno",
                desc: "Ritorno - CAN"
            }
        }
    },
    {
        id: "ruecklauf_2",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        value_rect_id: "return_flow_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "R\xfccklauf - UART"
            },
            en: {
                desc: "Return flow - UART"
            },
            it: {
                desc: "Ritorno - UART"
            }
        }
    },
    {
        id: "verdampfer",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        label_rect_id: "evaporator_label",
        value_rect_id: "evaporator_value",
        offset: 6,
        category: {
            de: "Mitte",
            en: "Middle",
            it: "Centro"
        },
        texts: {
            de: {
                label: "Verdampfer",
                desc: "Verdampfer"
            },
            en: {
                label: "Evaporator",
                desc: "Evaporator"
            },
            it: {
                label: "Evaporatore",
                desc: "Evaporatore"
            }
        }
    },
    {
        id: "hot_gas",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        label_rect_id: "hot_gas_label",
        value_rect_id: "hot_gas_value",
        offset: 6,
        texts: {
            de: {
                label: "Hei\xdfgas",
                desc: "Hei\xdfgas"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas"
            },
            it: {
                label: "Gas caldo",
                desc: "Gas caldo"
            }
        }
    },
    {
        id: "hot_gas_condenser",
        domain: "sensor",
        unit: "\xb0C",
        label_rect_id: "hot_gas_condenser_label",
        value_rect_id: "hot_gas_condenser_value",
        offset: 6,
        optional: true,
        parent: "hot_gas_condenser",
        texts: {
            de: {
                label: "Hei\xdfgas",
                desc: "Hei\xdfgas am Kondensator"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas at the condenser"
            },
            it: {
                label: "Gas caldo",
                desc: "Gas caldo al condensatore"
            }
        }
    },
    {
        id: "spread",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "spread_label",
        value_rect_id: "spread_value",
        offset: 6,
        texts: {
            de: {
                label: "Spreizung",
                desc: "Spreizung"
            },
            en: {
                label: "Spread",
                desc: "Temperature spread"
            },
            it: {
                label: "\u0394T",
                desc: "Differenza di temperatura"
            }
        }
    },
    {
        id: "vorlauf_1",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "flow_label",
        value_rect_id: "flow_can_value",
        offset: 6,
        texts: {
            de: {
                label: "Vorlauf",
                desc: "Vorlauf - CAN"
            },
            en: {
                label: "Flow",
                desc: "Flow - CAN"
            },
            it: {
                label: "Mandata",
                desc: "Mandata - CAN"
            }
        }
    },
    {
        id: "vorlauf_2",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        value_rect_id: "flow_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "Vorlauf - UART"
            },
            en: {
                desc: "Flow - UART"
            },
            it: {
                desc: "Mandata - UART"
            }
        }
    },
    {
        id: "vorlauf_soll",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "flow_setpoint_label",
        value_rect_id: "flow_setpoint_value",
        offset: 6,
        texts: {
            de: {
                label: "Vorlauf-Soll",
                desc: "Vorlauf Soll"
            },
            en: {
                label: "Setpoint",
                desc: "Flow setpoint"
            },
            it: {
                label: "Impostata",
                desc: "Temperatura di mandata impostata"
            }
        }
    },
    {
        id: "wasserdruck",
        domain: "sensor",
        device: "CAN",
        unit: "bar",
        label_rect_id: "pressure_label",
        value_rect_id: "pressure_value",
        offset: 6,
        texts: {
            de: {
                label: "Druck",
                desc: "Wasserdruck"
            },
            en: {
                label: "Pressure",
                desc: "Water Pressure"
            },
            it: {
                label: "Pressione",
                desc: "Pressione dell'acqua"
            }
        }
    },
    {
        id: "vorlauf_bh_1",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "flow_bh_label",
        value_rect_id: "flow_bh_can_value",
        offset: 6,
        texts: {
            de: {
                label: "Vorlauf BH",
                desc: "VorlaufBH - CAN"
            },
            en: {
                label: "Flow BH",
                desc: "Flow BH - CAN"
            },
            it: {
                label: "Mandata BH",
                desc: "Mandata al riscaldatore di backup - CAN"
            }
        }
    },
    {
        id: "vorlauf_bh_2",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        value_rect_id: "flow_bh_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "VorlaufBH - UART"
            },
            en: {
                desc: "Flow BH - UART"
            },
            it: {
                desc: "Flow BH - UART"
            }
        }
    },
    {
        id: "kompressor_an_aus",
        domain: "binary_sensor",
        device: "CAN",
        value_rect_id: "comp_rect",
        offset: 2,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Status Kompressor"
            },
            en: {
                desc: "Compressor status"
            },
            it: {
                desc: "Stato del compressore"
            }
        }
    },
    {
        id: "luefter",
        domain: "sensor",
        device: "UART",
        unit: "RPM",
        label_rect_id: "fan_label",
        value_rect_id: "fan_value",
        offset: 6,
        category: {
            de: "Unten",
            en: "Bottom",
            it: "In basso"
        },
        digits: 0,
        texts: {
            de: {
                label: "L\xfcfter",
                desc: "L\xfcfter Drehzahl"
            },
            en: {
                label: "Fan",
                desc: "Fan speed"
            },
            it: {
                label: "Ventilatore",
                desc: "Velocit\xe0 del ventilatore"
            }
        }
    },
    {
        id: "verdichter",
        domain: "sensor",
        device: "UART",
        unit: "RPM",
        label_rect_id: "compressor_label",
        value_rect_id: "compressor_value",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "Verdichter",
                desc: "Verdichter Drehzahl"
            },
            en: {
                label: "Compressor",
                desc: "Compressor speed"
            },
            it: {
                label: "Compressore",
                desc: "Velocit\xe0 del compressore"
            }
        }
    },
    {
        id: "speicher",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "storage_label",
        value_rect_id: "storage_value",
        offset: 6,
        texts: {
            de: {
                label: "Speicher",
                desc: "Speicher Ist"
            },
            en: {
                label: "Storage",
                desc: "Current storage value"
            },
            it: {
                label: "Serbatoio",
                desc: "Temperatura serbatoio attuale"
            }
        }
    },
    {
        id: "speicher_soll",
        domain: "select",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "storage_setpoint_label",
        value_rect_id: "storage_setpoint_value",
        offset: 6,
        texts: {
            de: {
                label: "Soll",
                desc: "Speicher Soll"
            },
            en: {
                label: "Setpoint",
                desc: "Storage setpoint"
            },
            it: {
                label: "Impostata",
                desc: "Temperatura serbatoio impostata"
            }
        }
    },
    {
        id: "buh_power",
        domain: "sensor",
        unit: [
            "W",
            "kW"
        ],
        label_rect_id: "buh_info_label",
        value_rect_id: "buh_info_value",
        offset: 6,
        digits: 0,
        optional: true,
        parent: "buh",
        texts: {
            de: {
                label: "Heizstab",
                desc: "Heizstableistung"
            },
            en: {
                label: "Heating rod",
                desc: "Heating rod power"
            },
            it: {
                label: "Resistenza",
                desc: "Potenza della barra riscaldante"
            }
        }
    },
    {
        id: "mischer",
        domain: "sensor",
        device: "CAN",
        unit: "%",
        value_rect_id: "dhw_mixer_value",
        offset: 6,
        digits: 0,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Mischer"
            },
            en: {
                desc: "Mixer"
            },
            it: {
                desc: "Miscelatore"
            }
        }
    },
    {
        id: "bypass",
        domain: "sensor",
        device: "CAN",
        unit: "%",
        value_rect_id: "bypass_value",
        offset: 6,
        digits: 0,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Bypass"
            },
            en: {
                desc: "Bypass"
            },
            it: {
                desc: "Bypass"
            }
        }
    },
    {
        id: "fehlercode",
        domain: "sensor",
        device: "CAN",
        value_rect_id: "fehlercode_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        category: {
            de: "Info",
            en: "Info",
            it: "Info"
        },
        texts: {
            de: {
                suffix: "Fehlercode: ",
                desc: "Fehlercode"
            },
            en: {
                suffix: "Error code: ",
                desc: "Error code"
            },
            it: {
                suffix: "Codice errore: ",
                desc: "Codice di errore"
            }
        }
    },
    {
        id: "betriebsmodus",
        domain: "select",
        device: "CAN",
        value_rect_id: "betriebsmodus_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Modus: ",
                desc: "Betriebsmodus"
            },
            en: {
                suffix: "Mode: ",
                desc: "Operating mode"
            },
            it: {
                suffix: "Modalit\xe0: ",
                desc: "Modalit\xe0 di funzionamento"
            }
        }
    },
    {
        id: "betriebsart",
        domain: "sensor",
        device: "CAN",
        value_rect_id: "betriebsart_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Betriebsart: ",
                desc: "Betriebsart"
            },
            en: {
                suffix: "Mode of oper.: ",
                desc: "Mode of operating"
            },
            it: {
                suffix: "Tipo di funzionamento.: ",
                desc: "Tipo di funzionamento"
            }
        }
    },
    {
        id: "thermische_leistung",
        domain: "sensor",
        device: "CAN",
        unit: "kW",
        value_rect_id: "therm_leistung_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        suffix: "Therm. Leistung: ",
        texts: {
            de: {
                suffix: "Thermische Leistung: ",
                desc: "Thermische Leistung"
            },
            en: {
                suffix: "Thermal power: ",
                desc: "Thermal power"
            },
            it: {
                suffix: "Potenza termica: ",
                desc: "Potenza termica"
            }
        }
    },
    {
        id: "el_power",
        domain: "sensor",
        unit: "kW",
        value_rect_id: "el_power_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "Elekrische Leistung: ",
                desc: "Elektrische Leistung"
            },
            en: {
                suffix: "Electric power: ",
                desc: "Electric power"
            },
            it: {
                suffix: "Potenza elettrica: ",
                desc: "Potenza elettrica"
            }
        }
    },
    {
        id: "cop",
        domain: "sensor",
        value_rect_id: "cop_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "COP: ",
                desc: "COP"
            },
            en: {
                suffix: "COP: ",
                desc: "COP"
            },
            it: {
                suffix: "COP: ",
                desc: "COP"
            }
        }
    },
    {
        id: "t_room_is",
        domain: "sensor",
        value_rect_id: "t_room_is_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "Raum-Ist: ",
                desc: "Raum-Ist"
            },
            en: {
                suffix: "Room setpoint: ",
                desc: "Room setpoint"
            },
            it: {
                suffix: "Temperatura ambiente impostata: ",
                desc: "Temperatura ambiente impostata"
            }
        }
    },
    {
        id: "system_date",
        domain: "sensor",
        device: "CAN",
        value_rect_id: "date_value",
        parent: "date_value",
        offset: 6,
        fontSize: "40px",
        optional: true,
        texts: {
            de: {
                desc: "Datum"
            },
            en: {
                desc: "Date"
            },
            it: {
                desc: "Data"
            }
        }
    },
    {
        id: "system_time",
        domain: "sensor",
        device: "CAN",
        value_rect_id: "time_value",
        parent: "time_value",
        offset: 6,
        fontSize: "40px",
        optional: true,
        texts: {
            de: {
                desc: "Zeit"
            },
            en: {
                desc: "Time"
            },
            it: {
                desc: "Ora"
            }
        }
    }
];
const $eb5cfe1dd9fe4e85$export$d0d68bb9ed2c643d = [
    "de",
    "en",
    "it"
];
const $eb5cfe1dd9fe4e85$export$f8cda7abf1aa048 = {
    "de": {
        "on": "An",
        "off": "Aus"
    },
    "en": {
        "on": "On",
        "off": "Off"
    },
    "it": {
        "on": "On",
        "off": "Off"
    }
};
const $eb5cfe1dd9fe4e85$export$127f9a442b42d18 = function(config) {
    const validEntities = Object.fromEntries(Object.entries(config.entities ?? {}).filter(([key])=>$eb5cfe1dd9fe4e85$export$9b06e6104ce35b16.some((entity_conf)=>entity_conf.id === key)));
    return {
        ...config,
        entities: validEntities
    };
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t, elements: s } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    }, $9cd908ed2625c047$var$e = (i, e, n)=>{
    e.constructor.createProperty(n, i);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(n) {
    return (t, o)=>void 0 !== o ? $9cd908ed2625c047$var$e(n, t, o) : $9cd908ed2625c047$var$i(n, t);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(t) {
    return (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        ...t,
        state: !0
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$29fd0ed4087278b5 = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, $25e9c5a8f7ecfc69$export$18eb0154d0069a01 = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), $25e9c5a8f7ecfc69$export$757d561a932dc1cb = ({ finisher: e, descriptor: t })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(e) {
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(i, n) {
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ed34c589b230c255$export$dcd0d083aa86c355(e) {
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(e) {
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $563fcf7ce7e6c5aa$var$n;
const $563fcf7ce7e6c5aa$var$e = null != (null === ($563fcf7ce7e6c5aa$var$n = window.HTMLSlotElement) || void 0 === $563fcf7ce7e6c5aa$var$n ? void 0 : $563fcf7ce7e6c5aa$var$n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(n) {
    const { slot: l, selector: t } = null != n ? n : {};
    return (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? $563fcf7ce7e6c5aa$var$e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, $563fcf7ce7e6c5aa$export$4682af2d9ee91415)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, $25e9c5a8f7ecfc69$export$757d561a932dc1cb)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}




/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = window, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$n = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(n, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, n)=>{
    $def2de46b9306e8a$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $19fe8e3abedf4df0$var$s;
const $19fe8e3abedf4df0$var$e = window, $19fe8e3abedf4df0$var$r = $19fe8e3abedf4df0$var$e.trustedTypes, $19fe8e3abedf4df0$var$h = $19fe8e3abedf4df0$var$r ? $19fe8e3abedf4df0$var$r.emptyScript : "", $19fe8e3abedf4df0$var$o = $19fe8e3abedf4df0$var$e.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $19fe8e3abedf4df0$var$l = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
}, $19fe8e3abedf4df0$var$d = "finalized";
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = $19fe8e3abedf4df0$var$l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || $19fe8e3abedf4df0$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d)) return !1;
        this[$19fe8e3abedf4df0$var$d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(i));
        } else void 0 !== i && s.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = $19fe8e3abedf4df0$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d] = !0, $19fe8e3abedf4df0$export$c7c07a37856565d.elementProperties = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $19fe8e3abedf4df0$var$o || $19fe8e3abedf4df0$var$o({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), (null !== ($19fe8e3abedf4df0$var$s = $19fe8e3abedf4df0$var$e.reactiveElementVersions) && void 0 !== $19fe8e3abedf4df0$var$s ? $19fe8e3abedf4df0$var$s : $19fe8e3abedf4df0$var$e.reactiveElementVersions = []).push("1.6.3");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $f58f44579a4747ac$var$t;
const $f58f44579a4747ac$var$i = window, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$o = "$lit$", $f58f44579a4747ac$var$n = `lit$${(Math.random() + "").slice(9)}$`, $f58f44579a4747ac$var$l = "?" + $f58f44579a4747ac$var$n, $f58f44579a4747ac$var$h = `<${$f58f44579a4747ac$var$l}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$u = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$d = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$c = Array.isArray, $f58f44579a4747ac$var$v = (t)=>$f58f44579a4747ac$var$c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $f58f44579a4747ac$var$a = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$a}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$a}*=${$f58f44579a4747ac$var$a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$w(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$w(2), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$E = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129, null, !1);
function $f58f44579a4747ac$var$P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === $f58f44579a4747ac$var$f ? "!--" === c[1] ? u = $f58f44579a4747ac$var$_ : void 0 !== c[1] ? u = $f58f44579a4747ac$var$m : void 0 !== c[2] ? ($f58f44579a4747ac$var$y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = $f58f44579a4747ac$var$p) : void 0 !== c[3] && (u = $f58f44579a4747ac$var$p) : u === $f58f44579a4747ac$var$p ? ">" === c[0] ? (u = null != l ? l : $f58f44579a4747ac$var$f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? $f58f44579a4747ac$var$p : '"' === c[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : u === $f58f44579a4747ac$var$$ || u === $f58f44579a4747ac$var$g ? u = $f58f44579a4747ac$var$p : u === $f58f44579a4747ac$var$_ || u === $f58f44579a4747ac$var$m ? u = $f58f44579a4747ac$var$f : (u = $f58f44579a4747ac$var$p, l = void 0);
        const w = u === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$h : v >= 0 ? (e.push(d), s.slice(0, v) + $f58f44579a4747ac$var$o + s.slice(v) + $f58f44579a4747ac$var$n + w) : s + $f58f44579a4747ac$var$n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        $f58f44579a4747ac$var$P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = $f58f44579a4747ac$var$V(t, i);
        if (this.el = $f58f44579a4747ac$var$N.createElement(a, e), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = $f58f44579a4747ac$var$C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith($f58f44579a4747ac$var$o) || i.startsWith($f58f44579a4747ac$var$n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + $f58f44579a4747ac$var$o).split($f58f44579a4747ac$var$n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $f58f44579a4747ac$var$H : "?" === i[1] ? $f58f44579a4747ac$var$L : "@" === i[1] ? $f58f44579a4747ac$var$z : $f58f44579a4747ac$var$k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if ($f58f44579a4747ac$var$y.test(h.tagName)) {
                    const t = h.textContent.split($f58f44579a4747ac$var$n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], $f58f44579a4747ac$var$u()), $f58f44579a4747ac$var$C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], $f58f44579a4747ac$var$u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === $f58f44579a4747ac$var$l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf($f58f44579a4747ac$var$n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += $f58f44579a4747ac$var$n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = $f58f44579a4747ac$var$d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $f58f44579a4747ac$var$S(t, r._$AS(t, i.values), r, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $f58f44579a4747ac$var$r).importNode(s, !0);
        $f58f44579a4747ac$var$C.currentNode = o;
        let n = $f58f44579a4747ac$var$C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new $f58f44579a4747ac$var$R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new $f58f44579a4747ac$var$Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = $f58f44579a4747ac$var$C.nextNode(), l++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$d(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $f58f44579a4747ac$var$v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$d(this._$AH) ? this._$AA.nextSibling.data = t : this.$($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new $f58f44579a4747ac$var$M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$E.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$E.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    T(t) {
        $f58f44579a4747ac$var$c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.k($f58f44579a4747ac$var$u()), this.k($f58f44579a4747ac$var$u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $f58f44579a4747ac$var$S(this, t, i, 0), n = !$f58f44579a4747ac$var$d(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $f58f44579a4747ac$var$S(this, e[s + l], i, l), h === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$f58f44579a4747ac$var$d(h) || h !== this._$AH[l]), h === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
const $f58f44579a4747ac$var$I = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $f58f44579a4747ac$var$I) : this.element.removeAttribute(this.name);
    }
}
class $f58f44579a4747ac$var$z extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $f58f44579a4747ac$var$S(this, t, i, 0)) && void 0 !== s ? s : $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $f58f44579a4747ac$export$45b790e32b2810ee && e !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (e === $f58f44579a4747ac$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    O: $f58f44579a4747ac$var$o,
    P: $f58f44579a4747ac$var$n,
    A: $f58f44579a4747ac$var$l,
    C: 1,
    M: $f58f44579a4747ac$var$V,
    L: $f58f44579a4747ac$var$M,
    R: $f58f44579a4747ac$var$v,
    D: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    V: $f58f44579a4747ac$var$k,
    H: $f58f44579a4747ac$var$L,
    N: $f58f44579a4747ac$var$z,
    U: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$Z
}, $f58f44579a4747ac$var$B = $f58f44579a4747ac$var$i.litHtmlPolyfillSupport;
null == $f58f44579a4747ac$var$B || $f58f44579a4747ac$var$B($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), (null !== ($f58f44579a4747ac$var$t = $f58f44579a4747ac$var$i.litHtmlVersions) && void 0 !== $f58f44579a4747ac$var$t ? $f58f44579a4747ac$var$t : $f58f44579a4747ac$var$i.litHtmlVersions = []).push("2.8.0");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $ab210b2da7b39b9d$var$l, $ab210b2da7b39b9d$var$o;
const $ab210b2da7b39b9d$export$8bf27daf9e8907c9 = (0, $19fe8e3abedf4df0$export$c7c07a37856565d);
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157.finalized = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, null === ($ab210b2da7b39b9d$var$l = globalThis.litElementHydrateSupport) || void 0 === $ab210b2da7b39b9d$var$l || $ab210b2da7b39b9d$var$l.call(globalThis, {
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$n = globalThis.litElementPolyfillSupport;
null == $ab210b2da7b39b9d$var$n || $ab210b2da7b39b9d$var$n({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== ($ab210b2da7b39b9d$var$o = globalThis.litElementVersions) && void 0 !== $ab210b2da7b39b9d$var$o ? $ab210b2da7b39b9d$var$o : globalThis.litElementVersions = []).push("3.3.3");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




const $d067581fc0d59830$var$ensureArray = (value)=>{
    return Array.isArray(value) ? value : [
        value
    ];
};
class $d067581fc0d59830$export$70410bc798970b36 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    async setConfig(config) {
        // HACK: This call is necessary to load the ha-entity-picker components.
        const cardHelpers = await window.loadCardHelpers();
        const entitiesCard = await cardHelpers.createCardElement({
            type: "entities",
            entities: []
        });
        await entitiesCard.constructor.getConfigElement();
        // HACK end
        this.config = (0, $eb5cfe1dd9fe4e85$export$127f9a442b42d18)(config);
        this.svgItemConfig = (0, $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16).map((svg_item)=>({
                ...svg_item,
                entityId: this.config.entities?.[svg_item.id] ?? null
            }));
    }
    willUpdate(changedProperties) {
        if (changedProperties.has("hass") && this.hass?.language) {
            const lang = this.hass.language.split("-")[0];
            this.language = (0, $eb5cfe1dd9fe4e85$export$d0d68bb9ed2c643d).includes(lang) ? lang : "en";
        }
    }
    render() {
        if (!this.config) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        const categories = {};
        if (this.svgItemConfig[0].category) {
            let lastCategory = this.svgItemConfig[0].category;
            this.svgItemConfig.forEach((item)=>{
                let currentCategory = item.category;
                if (currentCategory) lastCategory = currentCategory;
                else currentCategory = lastCategory;
                const category = currentCategory[this.language];
                if (!categories[category]) categories[category] = [];
                categories[category].push(item);
            });
        }
        const deviceLabel = "HPSU Devices";
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="card-config">
                <ha-expansion-panel
                    .header=${deviceLabel}
                >
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{
            device: {}
        }}
                        .value=${this.config.canDevice}
                        @value-changed=${this._entityChanged}
                        id="can-device-selector"
                        .placeholder=${"CAN Ger\xe4t ausw\xe4hlen"}
                        can-device-id=${this.config.canDevice}>
                    </ha-selector>
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{
            device: {}
        }}
                        .value=${this.config.uartDevice}
                        @value-changed=${this._entityChanged}
                        id="uart-device-selector"
                        .placeholder=${"UART Ger\xe4t ausw\xe4hlen"}
                        can-device-id=${this.config.uartDevice}
                        >
                    </ha-selector>
                </ha-expansion-panel>
                ${Object.keys(categories).map((category)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                    <ha-expansion-panel
                        .header=${category}
                    >
                        ${categories[category].map((svg_item)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                            <ha-selector
                                .hass=${this.hass}
                                .selector=${{
                    entity: {
                        include_entities: this.getRelevantEntityIds(svg_item)
                    }
                }}
                                .placeholder=${svg_item.texts[this.language]?.desc || "<missing>"}
                                .value=${svg_item.entityId}
                                @value-changed=${this._entityChanged}
                                data-id=${svg_item.id}
                            >
                            </ha-selector>
                        `)}
                    </ha-expansion-panel>
                `)}
            </div>
        `;
    }
    getRelevantEntityIds(svg_item) {
        const relevantEntityIds = [];
        const targetDeviceId = svg_item.device === "UART" ? this.config.uartDevice : this.config.canDevice;
        const targetUnit = $d067581fc0d59830$var$ensureArray(svg_item.unit);
        for(const entityId in this.hass.states){
            if (!Object.prototype.hasOwnProperty.call(this.hass.states, entityId)) continue;
            const entity = this.hass.states[entityId];
            const domain = entityId.substring(0, entityId.indexOf('.'));
            if (svg_item.device && targetDeviceId) {
                const entityRegistryEntry = this.hass.entities[entityId];
                if (!entityRegistryEntry || entityRegistryEntry.device_id !== targetDeviceId) continue;
            }
            if (svg_item.domain !== undefined && svg_item.domain !== domain) continue;
            if (domain !== "select") {
                const unitOfMeasurement = entity.attributes.unit_of_measurement;
                if (!targetUnit.includes(unitOfMeasurement)) continue;
            }
            relevantEntityIds.push(entityId);
        }
        return relevantEntityIds;
    }
    _entityChanged(event) {
        event.stopPropagation();
        const picker = event.target;
        const updatedEntities = {
            ...this.config.entities
        };
        let canDevice = this.config.canDevice;
        if (picker.getAttribute("id") == "can-device-selector") canDevice = event.detail.value;
        let uartDevice = this.config.uartDevice;
        if (picker.getAttribute("id") == "uart-device-selector") uartDevice = event.detail.value;
        const entityId = picker.getAttribute("data-id");
        if (entityId) updatedEntities[entityId] = event.detail.value;
        this.config = {
            ...this.config,
            canDevice: canDevice,
            uartDevice: uartDevice,
            entities: $d067581fc0d59830$export$70410bc798970b36.sortRecordBySvgOrder(updatedEntities, this.svgItemConfig)
        };
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: {
                config: this.config
            },
            bubbles: true,
            composed: true
        }));
    }
    static sortRecordBySvgOrder(data, svgItems) {
        const dataKeys = Object.keys(data);
        const sortedEntries = svgItems.filter((item)=>dataKeys.includes(item.id)).map((item)=>[
                item.id,
                data[item.id]
            ]);
        return Object.fromEntries(sortedEntries);
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
            .card-config {
                display: flex;
                flex-direction: column;
                padding: 16px;
            }
            h2 {
                font-size: 20px;
                margin-bottom: 16px;
                margin-top: 24px;
            }
            ha-selector, ha-device-picker, ha-entity-picker {
                margin: 5px;
                display: block;
            }
        `;
    }
    constructor(...args){
        super(...args), this.language = "en", this.svgItemConfig = [];
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $d067581fc0d59830$export$70410bc798970b36.prototype, "hass", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Object
    })
], $d067581fc0d59830$export$70410bc798970b36.prototype, "config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "language", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "svgItemConfig", void 0);




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $a4df01ff0b0132fe$export$3bebd1f0e3943985 extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(i){
        if (super(i), this.et = (0, $f58f44579a4747ac$export$45b790e32b2810ee), i.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, $f58f44579a4747ac$export$45b790e32b2810ee) || null == r) return this.ft = void 0, this.et = r;
        if (r === (0, $f58f44579a4747ac$export$9c068ae9cc5db4e8)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.et) return this.ft;
        this.et = r;
        const s = [
            r
        ];
        return s.raw = s, this.ft = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
$a4df01ff0b0132fe$export$3bebd1f0e3943985.directiveName = "unsafeHTML", $a4df01ff0b0132fe$export$3bebd1f0e3943985.resultType = 1;
const $a4df01ff0b0132fe$export$b6e69390c23686fb = (0, $107bb7d062dde330$export$99b43ad1ed32e735)($a4df01ff0b0132fe$export$3bebd1f0e3943985);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $33e813419ea8f3a8$var$t extends (0, $a4df01ff0b0132fe$export$3bebd1f0e3943985) {
}
$33e813419ea8f3a8$var$t.directiveName = "unsafeSVG", $33e813419ea8f3a8$var$t.resultType = 2;
const $33e813419ea8f3a8$export$1cb98903879b8bf5 = (0, $107bb7d062dde330$export$99b43ad1ed32e735)($33e813419ea8f3a8$var$t);




var $a399cc6bbb0eb26a$export$4661a56c3a27d933 = /*#__PURE__*/ function(DashboardState) {
    DashboardState["Loading"] = "loading";
    DashboardState["Ready"] = "ready";
    DashboardState["Error"] = "error";
    return DashboardState;
}({});
class $a399cc6bbb0eb26a$export$9de59f1af66e4f03 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    setConfig(config) {
        this.config = (0, $eb5cfe1dd9fe4e85$export$127f9a442b42d18)(config);
        this.svg_item_config = (0, $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16).map((svg_item)=>({
                ...svg_item,
                entityId: this.config.entities?.[svg_item.id] || null
            }));
    }
    willUpdate(changed) {
        if (changed.has("hass") && this.hass?.language) {
            // Use config language if set, otherwise use Home Assistant language
            const configLang = this.config?.language;
            const lang = configLang || this.hass.language.split("-")[0];
            this.language = (0, $eb5cfe1dd9fe4e85$export$d0d68bb9ed2c643d).includes(lang) ? lang : "de";
        }
    }
    async firstUpdated() {
        await this.createDashboard();
    }
    async createDashboard() {
        const url = this.makeURL("hpsu.svg");
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch '${url}' (${response.status})`);
            const rawSvgString = await response.text();
            this.svgContent = this.createSvgWithLabels(rawSvgString);
            this._state = "ready";
        } catch (e) {
            console.error(e);
            this.svgContent = null;
        }
    }
    addClickHandlers() {
        const setClickHandler = (elementId, entityId)=>{
            const element = this.shadowRoot.getElementById(elementId);
            if (element && entityId) {
                element.addEventListener("click", ()=>{
                    this.handleStateClick(entityId);
                });
                element.setAttribute("cursor", "pointer");
            }
        };
        this.svg_item_config.forEach((svg_item)=>{
            if (svg_item.valueBox && svg_item.entityId) {
                const id = `${svg_item.valueBox.id}_text`;
                setClickHandler(id, svg_item.entityId);
            }
        });
        const pressureEqualizationEntityId = this.findEntityIdById(this.svg_item_config, "pressure_equalization");
        setClickHandler("eev_arrow_left", pressureEqualizationEntityId);
        setClickHandler("eev_arrow_right", pressureEqualizationEntityId);
    }
    updated(changedProperties) {
        if (this.isPanelView()) this.setAttribute('panel-view', '');
        else this.removeAttribute('panel-view');
        if (this._state == "ready") {
            this.updateLabels();
            this.updateOpacity();
            if (!this.clickHandlersAdded) {
                this.addClickHandlers();
                this.clickHandlersAdded = true;
            }
        }
    }
    static getConfigElement() {
        return document.createElement("hpsu-dashboard-card-editor");
    }
    static{
        this.styles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
        .card-config {
            display: flex;
            flex-direction: column;
            padding: 16px;
        }
        h2 {
            font-size: 20px;
            margin-bottom: 16px;
        }
        paper-input {
            margin-bottom: 16px;
        }

        svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        :host([panel-view]) {
            display: block;
            max-height: 100vh;
            overflow: auto;
        }

        :host([panel-view]) svg {
            display: block;
            width: calc(100vw - var(--mdc-drawer-width, 256px));
            max-height: 100vh;
            overflow: auto;
        }

        @media (min-width: 768px) {
            :host([panel-view]) svg {
                max-height: calc(100vh - var(--header-height, 64px));
            }
        }

        @media (max-width: 767px) {
            :host([panel-view]) svg {
                width: auto;
                height: calc(100vh - var(--header-height, 56px));
            }
        }
        `;
    }
    render() {
        switch(this._state){
            case "error":
                return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-card>Fehler beim Laden des HPSU Dashboards.</ha-card>`;
            case "ready":
                return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                    <hpsu-dashboard-card-container>
                        ${this.svgContent ? (0, $33e813419ea8f3a8$export$1cb98903879b8bf5)(this.svgContent) : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
                    </hpsu-dashboard-card-container>
                `;
            default:
                return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        }
    }
    createSvgWithLabels(svgString) {
        if (!svgString) return null;
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
        const svgElement = svgDoc.documentElement;
        if (!svgElement || svgElement.tagName.toLowerCase() !== "svg") {
            console.error("The SVG was not parsed correctly.");
            return null;
        }
        svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgElement.style.display = "block";
        this.createStateLabels(svgDoc);
        return new XMLSerializer().serializeToString(svgElement);
    }
    createStateLabels(svgDoc) {
        this.svg_item_config.forEach((svg_item)=>{
            svg_item.valueBox = svgDoc.getElementById(svg_item.value_rect_id ?? "");
            if (svg_item.valueBox) {
                const group = svg_item.valueBox.parentNode;
                if (group) {
                    svg_item.entityId = this.config.entities?.[svg_item.id] ?? null;
                    const valueText = this.createText(svg_item.valueBox);
                    svg_item.labelBox = svg_item.label_rect_id ? svgDoc.getElementById(svg_item.label_rect_id) : null;
                    if (svg_item.labelBox) {
                        const labelText = this.createText(svg_item.labelBox);
                        group.appendChild(labelText);
                        labelText.setAttribute("font-size", "35");
                        labelText.setAttribute("fill", "rgb(191, 191, 191)");
                        labelText.textContent = svg_item.texts[this.language] ? svg_item.texts[this.language].label : svg_item.id + "<missing>";
                        this.layoutText(labelText, svg_item.labelBox, "middle", 3);
                    }
                    group.appendChild(valueText);
                } else console.warn(`Rect with ID ${svg_item.value_rect_id} parent not found.`);
            }
        });
    }
    createText(box) {
        const textText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textText.id = `${box.id}_text`;
        textText.setAttribute("dominant-baseline", "middle");
        textText.setAttribute("stroke-width", "1");
        const transform = box.getAttribute('transform');
        if (transform) textText.setAttribute("transform", transform);
        return textText;
    }
    layoutText(text, box, align, yOffset) {
        const xPos = parseFloat(box.getAttribute('x') ?? "");
        const yPos = parseFloat(box.getAttribute('y') ?? "");
        const width = parseFloat(box.getAttribute('width') ?? "");
        const height = parseFloat(box.getAttribute('height') ?? "");
        if (align == "left") {
            text.setAttribute("x", xPos.toString());
            text.setAttribute("text-anchor", "start");
        } else {
            text.setAttribute("x", (xPos + width / 2).toString());
            text.setAttribute("text-anchor", "middle");
        }
        if (yOffset != undefined) text.setAttribute("y", (yPos + height / 2 + yOffset).toString());
    }
    updateLabels() {
        if (this.config) {
            if (this.svg_item_config) this.svg_item_config.forEach((svg_item)=>{
                const newState = svg_item.entityId ? this.hass.states[svg_item.entityId] : null;
                const parentBox = svg_item.parent ? this.shadowRoot.getElementById(svg_item.parent) : null;
                if (parentBox) parentBox.style.display = newState ? "block" : "none";
                if (svg_item.valueBox) {
                    const id = `${svg_item.valueBox.id}_text`;
                    const valueText = this.shadowRoot.getElementById(id);
                    if (valueText) {
                        const fontSize = svg_item.fontSize || "56";
                        if (!newState) {
                            valueText.textContent = "N/D";
                            valueText.setAttribute("fill", "orange");
                            valueText.setAttribute("font-size", "30px");
                            valueText.setAttribute("display", svg_item.optional === true ? "none" : "block");
                        } else if (newState.state == "unknown" || newState.state == "unavailable") {
                            valueText.textContent = "N/A";
                            valueText.setAttribute("fill", "orange");
                            valueText.setAttribute("font-size", "30px");
                        } else {
                            let entityState = newState.state || "--";
                            valueText.setAttribute("font-size", fontSize);
                            if (this.isBooleanSensor(svg_item.entityId)) {
                                const lang_map = (0, $eb5cfe1dd9fe4e85$export$f8cda7abf1aa048)[this.language];
                                valueText.textContent = entityState === "on" ? lang_map.on : entityState === "off" ? lang_map.off : "<invalid>";
                                valueText.setAttribute("fill", entityState === "on" ? "yellow" : "silver");
                            } else {
                                entityState = this.formatNumber(newState, svg_item.digits ?? 1);
                                if (entityState == "Warmwasserbereitung") entityState = "Warmwasser";
                                if (svg_item.texts[this.language].suffix) entityState = svg_item.texts[this.language].suffix + entityState;
                                valueText.textContent = entityState;
                                if (svg_item.id != "fehlercode" || svg_item.texts[this.language].suffix == "Fehlercode: " && "Kein Fehler" || svg_item.texts[this.language].suffix == "Error code: " && "No Error" || svg_item.texts[this.language].suffix == "Codice errore: " && "Nessun errore") valueText.setAttribute("fill", "silver");
                                else valueText.setAttribute("fill", "red");
                            }
                        }
                        this.layoutText(valueText, svg_item.valueBox, svg_item.align, svg_item.offset);
                    } else console.warn("Label not found: " + svg_item.entityId);
                }
                if (svg_item.id == "pressure_equalization") {
                    const color = newState && newState.state == "on" ? '#00ff0080' : '#7f7f7f';
                    this.shadowRoot.getElementById("eev_arrow_left").setAttribute('fill', color);
                    this.shadowRoot.getElementById("eev_arrow_right").setAttribute('fill', color);
                } else if (svg_item.id == "buh_power") {
                    const color = newState && this.isPositiveNumber(newState.state) ? '#d4aa00ff' : '#7f7f7f';
                    this.shadowRoot.getElementById("buh-control").setAttribute('fill', color);
                }
            });
        }
    }
    updateOpacity() {
        if (this.config) {
            const dhwOpenArrows = this.shadowRoot.querySelector(`#dhw-open-arrows`);
            const dhwClosedArrows = this.shadowRoot.querySelector(`#dhw-closed-arrows`);
            const bpvOpenArrows = this.shadowRoot.querySelector(`#bpv-open-arrows`);
            const bpvClosedArrows = this.shadowRoot.querySelector(`#bpv-closed-arrows`);
            if (!dhwOpenArrows || !dhwClosedArrows || !bpvOpenArrows || !bpvClosedArrows) return;
            const flow_rate_id = this.config.entities?.['durchfluss'] ?? null;
            const mixer_id = this.config.entities?.['mischer'] ?? null;
            const bypass_id = this.config.entities?.['bypass'] ?? null;
            const flowRate = flow_rate_id && this.hass.states[flow_rate_id] ? parseFloat(this.hass.states[flow_rate_id].state) : 0;
            const mischerState = mixer_id && this.hass.states[mixer_id] ? parseFloat(this.hass.states[mixer_id].state) : 0;
            const bpvState = bypass_id && this.hass.states[bypass_id] ? parseFloat(this.hass.states[bypass_id].state) : 0;
            dhwOpenArrows.style.opacity = (flowRate > 0 ? mischerState / 100.0 : 0).toString();
            dhwClosedArrows.style.opacity = (flowRate > 0 ? (100.0 - mischerState) / 100.0 : 0).toString();
            bpvOpenArrows.style.opacity = (flowRate > 0 ? bpvState / 100.0 : 0).toString();
            bpvClosedArrows.style.opacity = (flowRate > 0 ? (100.0 - bpvState) / 100.0 : 0).toString();
            for(let index = 1; index <= 8; ++index){
                const arrow = this.shadowRoot.querySelector(`#Flow-Arrow-${index}`);
                arrow.style.opacity = (flowRate > 0 ? 1 : 0).toString();
            }
        }
    }
    handleStateClick(entityId) {
        this.dispatchEvent(new CustomEvent("hass-more-info", {
            detail: {
                entityId: entityId
            },
            bubbles: true,
            composed: true
        }));
    }
    makeURL(filename) {
        const repoName = "daikin-rotex-hpsu-dashboard";
        const scriptElement = document.querySelector(`script[src*="/hacsfiles/${repoName}/"]`);
        const scriptUrl = scriptElement && scriptElement.src ? scriptElement.src : "";
        const hacsTag = new URLSearchParams(scriptUrl.split("?")[1]).get("hacstag");
        console.log(`Script url: ${scriptUrl}, tag: ${hacsTag}`);
        if (hacsTag) return `/hacsfiles/${repoName}/${filename}?hacstag=${hacsTag}`;
        else return `/local/${repoName}/dist/${filename}?v=${Date.now()}`;
    }
    isPanelView() {
        let node = this;
        while(node){
            if (node.tagName?.toLowerCase() === "hui-panel-view") return true;
            node = node.getRootNode()?.host;
        }
        return false;
    }
    formatNumber(entity, digits) {
        if (!entity || !entity.state) return "--";
        const number = Number(entity.state);
        if (isNaN(number)) return entity.state;
        const formatted = new Intl.NumberFormat(this.hass.language, {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        }).format(number);
        const suffix = entity.attributes?.unit_of_measurement;
        return suffix ? `${formatted} ${suffix}` : formatted;
    }
    isBooleanSensor(entityId) {
        return this.hass?.states[entityId]?.entity_id?.startsWith("binary_sensor.") ?? false;
    }
    isPositiveNumber(value) {
        return !!value && !isNaN(Number(value)) && Number(value) > 0;
    }
    findEntityIdById(entities, id) {
        const entity = entities.find((entity)=>entity.id === id);
        return entity ? entity.entityId : undefined;
    }
    constructor(...args){
        super(...args), this._state = "loading", this.language = "de", this.svgContent = null, this.svg_item_config = [], this.clickHandlersAdded = false;
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "hass", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "_state", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "language", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "svgContent", void 0);
customElements.define("hpsu-dashboard-card", $a399cc6bbb0eb26a$export$9de59f1af66e4f03);
customElements.define("hpsu-dashboard-card-editor", (0, $d067581fc0d59830$export$70410bc798970b36));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "hpsu-dashboard-card",
    name: "HPSU Dashboard",
    description: "A Lovelace card for visualizing the Daikin HPSU status.",
    preview: true
});


export {$a399cc6bbb0eb26a$export$4661a56c3a27d933 as DashboardState, $a399cc6bbb0eb26a$export$9de59f1af66e4f03 as HPSUDashboardCard};
//# sourceMappingURL=hpsu-dashboard-card.js.map

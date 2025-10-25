import { Button, Input, Label } from "@/shared/ui"
import { useAuth, useAuthForm } from "../model"

export const AuthForm = () => {

    const authForm = useAuthForm();
    const { isLoading } = useAuth()

    return (
        <form onSubmit={authForm.handleSubmit} className="space-y-4">
            <fieldset className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                    id="email"
                    name="email"
                    value={authForm.values.email}
                    onChange={authForm.handleChange}
                    disabled={isLoading}
                    />
            </fieldset>
            <fieldset className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    value={authForm.values.password}
                    onChange={authForm.handleChange}
                    disabled={isLoading}
                />
            </fieldset>
            <Button type="submit" className="w-full">
                Login
            </Button>
        </form>
    )
}

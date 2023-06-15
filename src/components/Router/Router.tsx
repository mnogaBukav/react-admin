import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Auth } from '../pages/Auth'
import { authService } from 'src/services/Auth'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/filters" element={null} />
        <Route path="/profile" element={null} />
        {!authService.user$ && <Route path="*" element={<Navigate to="/auth" />} />}
      </Routes>
    </BrowserRouter>
  )
}
